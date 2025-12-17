import { supabase } from '@/utils/supabase';
import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/comments?post_id=xxx - Get comments for a post
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const postId = searchParams.get('post_id');

    if (!postId) {
      return NextResponse.json(
        { success: false, error: 'post_id is required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('blog_comments')
      .select('*')
      .eq('post_id', postId)
      .eq('approved', true)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

/**
 * POST /api/comments - Create new comment
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { post_id, author_name, author_email, content } = body;

    // Validate
    if (!post_id || !author_name || !author_email || !content) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(author_email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create comment (needs approval)
    const { data, error } = await supabase
      .from('blog_comments')
      .insert([
        {
          post_id,
          author_name,
          author_email,
          content,
          approved: false, // Needs admin approval
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Comment submitted for review',
      data: data[0],
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
