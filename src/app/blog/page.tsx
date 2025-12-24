import PageContainer from '@/app/components/container/PageContainer';
import HeaderAlert from '../components/frontend-pages/shared/header/HeaderAlert';
import HpHeader from '../components/frontend-pages/shared/header/HpHeader';
import C2a from '../components/frontend-pages/shared/c2a';
import Footer from '../components/frontend-pages/shared/footer';
import Banner from '../components/frontend-pages/blog/banner';
import ScrollToTop from '../components/frontend-pages/shared/scroll-to-top';
import BlogCard from '../components/frontend-pages/blog/blog-card/BlogCard';
import { supabase } from '@/utils/supabase/client';
import { Grid, Typography, Container } from "@mui/material";

const BlogPage = async () => {
  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, excerpt, cover_image, created_at, author, category')
    .eq('published', true)
    .order('created_at', { ascending: false });

  // فقط اگر خطای واقعی بود ارور بده
  if (error && Object.keys(error).length > 0) {
    console.error("Real error fetching posts:", error);
    return <Typography color="error">Error loading posts. Please try again later.</Typography>;
  }

  // اگر پست‌ها خالی بود، پیام "No posts yet" نشون بده
  if (!posts || posts.length === 0) {
    return (
      <PageContainer title="Blog" description="posts about Next.js and React web development">
        <HeaderAlert />
        <HpHeader />
        <Banner />
        <Container maxWidth="lg" sx={{ my: 8 }}>
          <Typography variant="h4" textAlign="center">
            No posts published yet.
          </Typography>
        </Container>
        <C2a />
        <Footer />
        <ScrollToTop />
      </PageContainer>
    );
  }

  return (
    <PageContainer title="Blog" description="posts about Next.js and React web development">
      <HeaderAlert />
      <HpHeader />
      <Banner />

      <Container maxWidth="lg" sx={{ my: 6 }}>
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={post.id}>
              <BlogCard
                blog={{
                  title: post.title,
                  slug: post.slug,
                  excerpt: post.excerpt || "No description available",
                  coverImage: post.cover_image || "/images/blog/default-cover.jpg",
                  date: post.created_at,
                  author: post.author || "Anonymous",
                  authorImage: "/images/profile/user-1.jpg",
                  category: post.category || "General",
                  views: "0",
                  comments: "0",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <C2a />
      <Footer />
      <ScrollToTop />
    </PageContainer>
  );
};

export default BlogPage;