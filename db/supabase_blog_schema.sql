-- Supabase SQL schema for blog: tables for profiles, blog_posts, blog_comments
-- Run in Supabase SQL editor (Project > SQL Editor)

-- Enable pgcrypto for gen_random_uuid()
create extension if not exists pgcrypto;

-- profiles table (if not present)
create table if not exists public.profiles (
  id uuid primary key,
  username text,
  full_name text,
  avatar_url text,
  role text default 'subscriber',
  updated_at timestamptz default now()
);

-- blog_posts table
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  cover_image text,
  category text,
  published boolean default false,
  author_id uuid references public.profiles(id) on delete set null,
  views integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists idx_blog_posts_created_at on public.blog_posts(created_at desc);
create index if not exists idx_blog_posts_views on public.blog_posts(views desc);

-- blog_comments table
create table if not exists public.blog_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references public.blog_posts(id) on delete cascade,
  author_name text,
  author_email text,
  content text,
  approved boolean default false,
  created_at timestamptz default now()
);

create index if not exists idx_blog_comments_post_id on public.blog_comments(post_id);

-- Optional: sample rows (uncomment to insert sample)
-- insert into public.profiles (id, username, full_name, role) values (gen_random_uuid(), 'admin', 'Admin User', 'admin');
