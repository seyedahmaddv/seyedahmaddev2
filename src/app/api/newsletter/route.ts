import { supabase } from '@/utils/supabase';
import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/newsletter - Subscribe to newsletter
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, language } = body;

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('id')
      .eq('email', email)
      .single();

    if (existing) {
      return NextResponse.json(
        { success: false, error: 'Email already subscribed' },
        { status: 400 }
      );
    }

    // Subscribe
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email,
          name: name || '',
          language: language || 'en',
          subscribed: true,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: data[0],
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/newsletter - Unsubscribe from newsletter
 */
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('newsletter_subscribers')
      .update({ subscribed: false, unsubscribed_at: new Date().toISOString() })
      .eq('email', email);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
