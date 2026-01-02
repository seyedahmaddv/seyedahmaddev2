-- Migration: ensure `views` column exists and create index safely
-- Run in Supabase SQL editor or via psql

-- Add column if missing
alter table if exists public.blog_posts
  add column if not exists views integer default 0;

-- Update existing NULLs to 0 (defensive)
update public.blog_posts set views = 0 where views is null;

-- Create index only if column exists
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema='public' AND table_name='blog_posts' AND column_name='views') THEN
    IF NOT EXISTS (SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace WHERE c.relkind = 'i' AND c.relname = 'idx_blog_posts_views') THEN
      execute 'create index idx_blog_posts_views on public.blog_posts(views desc)';
    END IF;
  END IF;
END$$;
