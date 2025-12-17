// GET /api/sitemap.xml
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seyedahmaddev.ir';

  const routes = [
    { path: '/', priority: 1.0 },
    { path: '/frontend-pages/homepage', priority: 0.9 },
    { path: '/frontend-pages/about', priority: 0.8 },
    { path: '/frontend-pages/blog', priority: 0.8 },
    { path: '/frontend-pages/contact', priority: 0.7 },
    { path: '/frontend-pages/portfolio', priority: 0.8 },
    { path: '/frontend-pages/pricing', priority: 0.7 },
    { path: '/dashboard', priority: 0.5 },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>
  `
    )
    .join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
