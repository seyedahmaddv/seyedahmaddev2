import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, { auth: { persistSession: false } });

async function getCallerRole(token: string | null) {
  if (!token) return null;
  const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(token);
  if (userErr || !userData?.user) return null;
  const user = userData.user;
  // Try metadata
  const metaRole = (user.user_metadata as any)?.role;
  if (metaRole) return metaRole;
  // fallback to profiles
  const { data: profile } = await supabaseAdmin.from('profiles').select('role').eq('id', user.id).maybeSingle();
  return (profile as any)?.role ?? null;
}

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get('authorization') || '';
    const token = authHeader.replace('Bearer ', '') || null;
    const callerRole = await getCallerRole(token);
    if (!callerRole || callerRole !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    // list users
    // supabase-js v2: auth.admin.listUsers()
    const { data: usersData, error: usersErr } = await (supabaseAdmin.auth as any).admin.listUsers();
    if (usersErr) {
      console.error('listUsers error', usersErr);
      return NextResponse.json({ error: 'Failed to list users' }, { status: 500 });
    }

    const users = (usersData?.users || []) as any[];
    const ids = users.map((u) => u.id);
    const { data: profiles } = await supabaseAdmin.from('profiles').select('id, role, username, full_name').in('id', ids);
    const profileMap = (profiles || []).reduce((acc: any, p: any) => { acc[p.id] = p; return acc; }, {});

    const result = users.map((u) => ({
      id: u.id,
      email: u.email,
      user_metadata: u.user_metadata,
      confirmed_at: u.confirmed_at,
      role: (profileMap[u.id] && profileMap[u.id].role) || ((u.user_metadata as any)?.role) || null,
      username: (profileMap[u.id] && profileMap[u.id].username) || (u.user_metadata as any)?.username || null,
      full_name: (profileMap[u.id] && profileMap[u.id].full_name) || (u.user_metadata as any)?.full_name || null,
    }));

    return NextResponse.json({ users: result });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization') || '';
    const token = authHeader.replace('Bearer ', '') || null;
    const callerRole = await getCallerRole(token);
    if (!callerRole || callerRole !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    const body = await req.json();
    const { userId, role } = body || {};
    if (!userId || !role) return NextResponse.json({ error: 'userId and role required' }, { status: 400 });

    const { error } = await supabaseAdmin.from('profiles').upsert({ id: userId, role });
    if (error) {
      console.error('upsert error', error);
      return NextResponse.json({ error: 'Failed to set role' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
