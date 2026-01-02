import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabaseAdmin = createClient(supabaseUrl!, supabaseServiceKey!);

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization') || '';
    const token = authHeader.replace('Bearer ', '');

    if (!token) return NextResponse.json({ error: 'Missing auth token' }, { status: 401 });

    const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(token);
    if (userErr || !userData?.user) return NextResponse.json({ error: 'Invalid user' }, { status: 401 });

    const user = userData.user;

    // Determine role: check metadata then profiles table
    let role = (user.user_metadata as any)?.role;
    if (!role) {
      const { data: profile } = await supabaseAdmin.from('profiles').select('role').eq('id', user.id).maybeSingle();
      role = (profile as any)?.role;
    }

    if (!role || (role !== 'admin' && role !== 'author')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const form = await req.formData();
    const title = form.get('title')?.toString() || '';
    const slug = form.get('slug')?.toString() || '';
    const excerpt = form.get('excerpt')?.toString() || '';
    const category = form.get('category')?.toString() || 'General';
    const published = form.get('published') === 'true' || false;
    const content = form.get('content')?.toString() || '';
    const coverFile = form.get('cover') as File | null;

    let cover_url = '';
    if (coverFile && typeof coverFile.arrayBuffer === 'function') {
      const arrayBuffer = await coverFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const filename = `covers/${Date.now()}_${coverFile.name}`;
      const { error: upErr } = await supabaseAdmin.storage.from('blog-covers').upload(filename, buffer, { contentType: coverFile.type });
      if (upErr) {
        console.error('upload error', upErr);
        return NextResponse.json({ error: 'Failed to upload cover' }, { status: 500 });
      }
      const { data } = supabaseAdmin.storage.from('blog-covers').getPublicUrl(filename);
      cover_url = data.publicUrl;
    }

    const insertObj = {
      title,
      slug: slug || title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
      excerpt,
      content,
      cover_image: cover_url,
      category,
      published,
      author_id: user.id,
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabaseAdmin.from('blog_posts').insert([insertObj]);
    if (error) {
      console.error('insert error', error);
      return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }

    return NextResponse.json({ status: 'ok', data }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
