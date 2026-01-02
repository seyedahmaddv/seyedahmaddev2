import PageContainer from '@/app/components/container/PageContainer';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import CreatePostForm from '@/app/components/apps/blog/CreatePostForm';
import RequireRole from '@/app/components/auth/RequireRole';

const CreatePostPage = () => {
  return (
    <PageContainer title="Create Post" description="Create new blog post">
      <Breadcrumb title="Create Post" subtitle="Write and publish new blog post" />
      <RequireRole roles={["admin", "author"]}>
        <CreatePostForm />
      </RequireRole>
    </PageContainer>
  );
};

export default CreatePostPage;
