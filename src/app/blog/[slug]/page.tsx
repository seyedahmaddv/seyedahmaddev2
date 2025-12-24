import { notFound } from "next/navigation";
import BlankCard from "@/app/components/shared/BlankCard";
import { supabase } from "@/utils/supabase/client";

import {
  CardContent,
  Container,
  Divider,
  CardMedia,
  Stack,
  Tooltip,
  Avatar,
  Box,
  Chip,
  Typography,
} from "@mui/material";

import { format } from "date-fns";
import { IconEye, IconMessage2, IconPoint } from "@tabler/icons-react";

import PageContainer from "@/app/components/container/PageContainer";
import C2a from "@/app/components/frontend-pages/shared/c2a";
import Footer from "@/app/components/frontend-pages/shared/footer";
import ScrollToTop from "@/app/components/frontend-pages/shared/scroll-to-top";
import HeaderAlert from "@/app/components/frontend-pages/shared/header/HeaderAlert";
import HpHeader from "@/app/components/frontend-pages/shared/header/HpHeader";
import BlogComments from "@/app/components/frontend-pages/blog/BlogComments";
import MarkdownRenderer from "@/app/components/shared/MarkdownRenderer";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data: post } = await supabase
    .from('blog_posts')
    .select('title')
    .eq('slug', slug)
    .single();

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | ${process.env.SITE_NAME ?? "My Blog"}`,
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data: post, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error || !post) {
    notFound();
  }

  const { count } = await supabase
    .from('blog_comments')
    .select('*', { count: 'exact', head: true })
    .eq('post_slug', slug)
    .eq('approved', true);

  return (
    <PageContainer title={post.title} description={post.excerpt || post.category}>
      <HeaderAlert />
      <HpHeader />

      <Container maxWidth="lg" sx={{ my: 4 }}>
        <BlankCard>
          <>
            {post.cover_image && (
              <CardMedia
                component="img"
                height="440"
                image={post.cover_image}
                alt={post.title}
              />
            )}

            <CardContent>
              <Stack direction="row" sx={{ mt: "-45px" }}>
                <Tooltip title={post.author || "Anonymous"} placement="top">
                  <Avatar src="/images/profile/user-1.jpg" />
                </Tooltip>

                <Chip
                  sx={{ ml: "auto", mt: "-21px", backgroundColor: "white" }}
                  label="5 min read"
                  size="small"
                />
              </Stack>

              {post.category && (
                <Chip label={post.category} size="small" sx={{ mt: 2 }} />
              )}

              <Box my={3}>
                <Typography variant="h1" fontWeight={600}>
                  {post.title}
                </Typography>
              </Box>

              <Stack direction="row" gap={3} alignItems="center">
                <Stack direction="row" gap={1} alignItems="center">
                  <IconEye size={18} />
                  Views: Coming soon
                </Stack>

                <Stack direction="row" gap={1} alignItems="center">
                  <IconMessage2 size={18} />
                  {count || 0} Comments
                </Stack>

                <Stack direction="row" ml="auto" alignItems="center">
                  <IconPoint size={16} />
                  <small>{format(new Date(post.created_at), "dd MMM yyyy")}</small>
                </Stack>
              </Stack>
            </CardContent>

            <Divider />

            <CardContent>
              <MarkdownRenderer content={post.content} />
            </CardContent>

            <CardContent>
              <BlogComments postSlug={slug} />
            </CardContent>
          </>
        </BlankCard>
      </Container>

      <C2a />
      <Footer />
      <ScrollToTop />
    </PageContainer>
  );
}