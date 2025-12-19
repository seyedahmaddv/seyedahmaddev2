import { notFound } from "next/navigation";
import BlankCard from "@/app/components/shared/BlankCard";
import { getPostBySlug } from "@/utils/markdown";
import markdownToHtml from "@/utils/markdownToHtml";

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

/* ----------------------------------------
   Metadata (SEO safe) - اصلاح شده برای Next.js 16
----------------------------------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug, ["title"]);

  if (!post) {
    return {
      title: "Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${post.title} | ${process.env.SITE_NAME ?? "My Blog"}`,
  };
}

/* ----------------------------------------
   Page Component - اصلاح شده برای Next.js 16
----------------------------------------- */
export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ← خیلی مهم! await کردن params

  const post = getPostBySlug(slug, [
    "title",
    "author",
    "authorImage",
    "content",
    "coverImage",
    "date",
    "views",
    "comments",
    "category",
  ]);

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content ?? "");

  return (
    <PageContainer title={post.title} description={post.category ?? ""}>
      <HeaderAlert />
      <HpHeader />

      <Container maxWidth="lg" sx={{ my: 4 }}>
        <BlankCard>
          <>
            {post.coverImage && (
              <CardMedia
                component="img"
                height="440"
                image={post.coverImage}
                alt={post.title}
              />
            )}

            <CardContent>
              <Stack direction="row" sx={{ mt: "-45px" }}>
                {post.authorImage && (
                  <Tooltip title={post.author ?? ""} placement="top">
                    <Avatar src={post.authorImage} />
                  </Tooltip>
                )}

                <Chip
                  sx={{
                    ml: "auto",
                    mt: "-21px",
                    backgroundColor: "white",
                  }}
                  label="2 min read"
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
                {post.views !== undefined && (
                  <Stack direction="row" gap={1} alignItems="center">
                    <IconEye size={18} />
                    {post.views}
                  </Stack>
                )}

                {post.comments !== undefined && (
                  <Stack direction="row" gap={1} alignItems="center">
                    <IconMessage2 size={18} />
                    {post.comments}
                  </Stack>
                )}

                {post.date && (
                  <Stack direction="row" ml="auto" alignItems="center">
                    <IconPoint size={16} />
                    <small>
                      {format(new Date(post.date), "dd MMM yyyy")}
                    </small>
                  </Stack>
                )}
              </Stack>
            </CardContent>

            <Divider />

            <CardContent>
              <div dangerouslySetInnerHTML={{ __html: content }} />
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