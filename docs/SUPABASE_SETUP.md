# Supabase Setup for Blog (bucket, keys, and schema)

This document explains how to prepare your Supabase project for the blog feature added in this repo.

1) Create tables (SQL)
----------------------
- Open Supabase Dashboard → SQL Editor → New query.
- Paste the contents of `db/supabase_blog_schema.sql` and run it. This creates `profiles`, `blog_posts`, and `blog_comments`.

2) Create storage bucket for cover images
----------------------------------------
- In Supabase Dashboard → Storage → Create new bucket.
- Name: `blog-covers` (must match code).
- Public or private: if you want public URLs, enable public (or use signed URLs and keep private).

3) Service Role Key (server-side)
----------------------------------
- Go to Supabase Dashboard → Project Settings → API.
- Copy the `Service Role` key (keep it secret!).
- Add it to your environment for server-side use (Next.js server):

  In local development, create `.env.local` at project root with:

  NEXT_PUBLIC_SUPABASE_URL=https://<your-project>.supabase.co
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=<your_anon_key>
  SUPABASE_SERVICE_ROLE_KEY=<your_service_role_key>

- `SUPABASE_SERVICE_ROLE_KEY` is used by the server API route `src/app/api/dashboard/blog/route.ts`.

4) Policies & Security
----------------------
- The server route uses the Service Role key to perform uploads and inserts — it bypasses RLS. Keep the service key secure.
- If you want to allow direct client inserts, configure Row Level Security (RLS) and create policies. Example: allow users to insert into `blog_comments` for their own posts, or allow users with `role = 'author'` to insert into `blog_posts`.

Example RLS snippet (optional)

-- Enable RLS on blog_posts (optional if you want fine-grained control)
-- alter table public.blog_posts enable row level security;

-- Policy: allow authors to insert where auth.uid() = author_id
-- create policy "Authors can insert their posts" on public.blog_posts
-- for insert using (auth.role() = 'authenticated') with check (auth.uid() = author_id);

5) Notes
--------
- Ensure the bucket name `blog-covers` matches the code in `src/app/api/dashboard/blog/route.ts`.
- Ensure `blog_posts` table has the columns used by the code: `title, slug, excerpt, content, cover_image, category, published, author_id, created_at`.
- After setup, login in the app as a user whose `profiles.role` is `admin` or `author` and test creating posts.

6) Troubleshooting
------------------
- If uploads fail, check Storage bucket permissions and that `SUPABASE_SERVICE_ROLE_KEY` is set.
- If insert fails, open Logs → Database in Supabase to see errors.
