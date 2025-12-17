import { supabase } from '@/utils/supabase';
import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/blog - Fetch all blog posts
 * Query params:
 * - page: number (default: 1)
 * - limit: number (default: 10)
 * - published: boolean (default: true)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const published = searchParams.get('published') !== 'false';

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase.from('blog_posts').select('*');

    if (published) {
      query = query.eq('published', true);
    }

    const { data, error, count } = await query
      .order('created_at', { ascending: false })
      .range(from, to);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      data,
      pagination: {
        page,
        limit,
        total: count,
        pages: Math.ceil((count || 0) / limit),
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

/**
 * POST /api/blog - Create new blog post (Admin only)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, content, excerpt, cover_image, author, tags, published } = body;

    // Validate required fields
    if (!title || !slug || !content) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .insert([
        {
          title,
          slug,
          content,
          excerpt: excerpt || content.substring(0, 200),
          cover_image: cover_image || '/images/blog/default.jpg',
          author: author || 'Seyed Ahmad',
          tags: tags || [],
          published: published ?? true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      data: data[0],
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
