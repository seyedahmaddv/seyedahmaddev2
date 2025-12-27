// src/data/portfolioData.ts
import { GallaryType } from '@/app/(DashboardLayout)/types/apps/users';

export const portfolioItems: GallaryType[] = [
  {
    id: 1,
    cover: "/images/portfolio/Marketplace-Dashboard-2.jpg",
    name: "Modern Dashboard Design",
    time: new Date("2025-09-15"),
    link: "https://marketplace-dashboard.vercel.app/"
  },
  {
    id: 2,
    cover: "/images/portfolio/ansarolquran-website.jpg",
    name: "E-Learning Web Application",
    time: new Date("2024-06-20"),
    link: "https://ansarolquran.ir"
  },
  {
    id: 3,
    cover: "/images/portfolio/furniro-app-estore-page-with-react.jpg",
    name: "furniro React App - Home Page for furniture Store",
    time: new Date("2023-03-10"),
    link: "https://furniro-app.vercel.app/"
  },
  {
    id: 4,
    cover: "/images/portfolio/URL-Shortener-Project-with-php.jpg",
    name: "URL Shortener Project",
    time: new Date("2025-04-05"),
    link: "https://shortenlink.infinityfree.me/"
  },
  {
    id: 5,
    cover: "/images/portfolio/card-01-hasan-tehrani-moghadam.jpg",
    name: "Profile Card — Hasan Tehrani Moghadam",
    time: new Date("2022-05-12"),
    link: "https://seyedahmaddv.github.io/hasan-tehrani-card/"
  },
  {
    id: 6,
    cover: "/images/portfolio/mini-job-finder-app.jpg",
    name: "Mini Job Finder App with rest API",
    time: new Date("2025-11-18"),
    link: "https://mini-job-finder-phi.vercel.app/"
  },
  // افزودن موارد بیشتر
];