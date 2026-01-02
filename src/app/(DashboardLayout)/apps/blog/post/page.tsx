import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import BlogListing from '@/app/components/apps/blog/BlogListing';
import { BlogProvider } from '@/app/context/BlogContext/index';
import RequireRole from '@/app/components/auth/RequireRole';
const Blog = () => {
  return (
    <BlogProvider>
      <PageContainer title="Blog" description="this is Blog">
        <Breadcrumb title="Seyed Ahmad" subtitle="Get the latest news" />
        {/* ------------------------------------------- */}
        {/* Blog Listing */}
        {/* ------------------------------------------- */}
        <RequireRole roles={["admin", "author"]}>
          <BlogListing />
        </RequireRole>
      </PageContainer>
    </BlogProvider>
  );
};

export default Blog;
