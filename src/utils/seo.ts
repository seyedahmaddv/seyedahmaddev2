import { Metadata } from 'next';

// Site metadata configuration
export const siteConfig = {
  name: 'Modernize Dashboard',
  description: 'Modern Admin Dashboard built with Next.js 16, Material-UI, and Turbopack',
  url: 'https://seyedahmaddev.ir',
  author: 'Seyed Ahmad Gholami',
  twitter: '@seyedahmaddv',
  keywords: [
    'admin dashboard',
    'next.js',
    'material-ui',
    'typescript',
    'turbopack',
    'react 19',
  ],
};

// Generate base metadata
export function generateBaseMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const fullDescription = description || siteConfig.description;
  const ogImage = image || `${siteConfig.url}/og-image.jpg`;
  const canonical = url || siteConfig.url;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
      creator: siteConfig.twitter,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    canonical: canonical,
  };
}

// Generate blog post metadata
export function generateBlogMetadata(
  title: string,
  description: string,
  slug: string,
  image?: string,
  author?: string,
  publishedAt?: Date
): Metadata {
  const url = `${siteConfig.url}/frontend-pages/blog/${slug}`;
  const ogImage = image || `${siteConfig.url}/og-image.jpg`;

  return {
    title: `${title} | Blog`,
    description,
    keywords: [title, 'blog', 'article'],
    authors: [{ name: author || siteConfig.author }],
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'article',
      publishedTime: publishedAt?.toISOString(),
      authors: [author || siteConfig.author],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
