# 🎨 Next.js website with Dashboard

> A modern, feature-rich admin dashboard built with **Next.js 16**, **Turbopack**, and **Material-UI**.

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Material-UI](https://img.shields.io/badge/MUI-7.0.1-007fff?style=flat-square&logo=mui)
![Turbopack](https://img.shields.io/badge/Turbopack-Latest-red?style=flat-square)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Recent Improvements](#recent-improvements)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**SeyedAhmadDev** is a comprehensive Next.js web application built with the latest technologies. It provides a solid foundation for building enterprise-level applications with a beautiful, responsive UI and extensive component library.

### Key Highlights
- ⚡ **Turbopack** - Ultra-fast build times with Next.js 16
- 🎨 **Material-UI v7** - Professional design system with 100+ components
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🔐 **Type-Safe** - Full TypeScript support with strict mode
- 🌍 **i18n Ready** - Multi-language support with i18next
- ♿ **Accessible** - WCAG compliant components
- 🎭 **Multiple Themes** - Dark mode, Light mode, RTL support
- 📦 **Production Ready** - Optimized for Vercel deployment

---

## 🛠️ Tech Stack

### Core Framework
| Package | Version | Purpose |
|---------|---------|---------|
| **Next.js** | 16.0.7 | React framework with App Router |
| **React** | 19 | UI library |
| **TypeScript** | 5 | Type safety |
| **Turbopack** | Latest | Next.js default bundler |

### UI & Styling
| Package | Version | Purpose |
|---------|---------|---------|
| **@mui/material** | 7.0.1 | Component library |
| **@mui/icons-material** | 7.0.1 | Icon set (1000+) |
| **@emotion/react** | 11.13.3 | CSS-in-JS styling |
| **@emotion/styled** | 11.13.0 | Styled components |

### Forms & Data Management
| Package | Version | Purpose |
|---------|---------|---------|
| **formik** | 2.4.5 | Form state management |
| **@tanstack/react-table** | 8.20.1 | Headless table library |

### Advanced UI Components
| Package | Version | Purpose |
|---------|---------|---------|
| **@mui/x-charts** | 7.22.1 | Charting library |
| **@mui/x-date-pickers** | 7.18.0 | Date/time pickers |
| **@mui/x-tree-view** | 7.18.0 | Tree component |

### Rich Text Editor
| Package | Version | Purpose |
|---------|---------|---------|
| **@tiptap/core** | 2.9.1 | Headless editor |
| **@tiptap/react** | 2.9.1 | React integration |
| **mui-tiptap** | 1.13.0 | MUI toolbar |

### Drag & Drop
| Package | Version | Purpose |
|---------|---------|---------|
| **@dnd-kit/core** | 6.1.0 | DnD library |
| **@hello-pangea/dnd** | 17.0.0 | Drag and drop |

### Data & Utilities
| Package | Version | Purpose |
|---------|---------|---------|
| **date-fns** | 2.30.0 | Date utilities |
| **lodash** | 4.17.21 | Utility functions |
| **apexcharts** | 3.48.0 | Chart library |

### Authentication & Authorization
| Package | Version | Purpose |
|---------|---------|---------|
| **@casl/ability** | 6.3.3 | Access control |
| **@casl/react** | 3.1.0 | React integration |

### UI Enhancements
| Package | Version | Purpose |
|---------|---------|---------|
| **framer-motion** | 10.16.4 | Animation library |
| **fslightbox-react** | 1.7.6 | Image lightbox |
| **@tabler/icons-react** | 2.39.0 | Tabler icon set |

### Internationalization
| Package | Version | Purpose |
|---------|---------|---------|
| **i18next** | 23.5.1 | i18n framework |

---

## ✨ Features

### 📊 Dashboard Layouts
- **Modern Layout** - Default dashboard with widgets
- **Dark Mode** - Full dark theme support
- **Horizontal Layout** - Side navigation on top
- **RTL Support** - Right-to-left language support
- **Mini Sidebar** - Compact sidebar variant

### 📱 Built-in Applications
1. **Calendar App** - Event management with calendar
2. **Chat App** - Real-time messaging interface
3. **Contact App** - Contact management system
4. **Email App** - Email client interface
5. **Note App** - Note-taking application
6. **User Profile App** - User management
7. **Blog App** - Blog management system
8. **Ticket App** - Support ticket system
9. **Kanban App** - Task management board
10. **Invoice App** - Invoice generation
11. **eCommerce** - Shop, checkout, product list

### 🎨 Components
- 100+ Material-UI components
- Custom form components
- Data tables with sorting/filtering
- Charts and graphs
- Modal dialogs
- Toast notifications

### 🔐 Security Features
- Role-Based Access Control (RBAC) with CASL
- Protected routes
- API route protection

### 🌍 Internationalization
- Multi-language support (i18next)
- Language switching
- RTL support

---

## 📦 Installation

### Prerequisites
- **Node.js**: 18.x or higher
- **npm** or **yarn** or **pnpm**

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/seyedahmaddv/seyedahmaddev2.git
   cd seyedahmaddev2/packages/typescript/dark
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (DashboardLayout)/          # Dashboard pages
│   ├── components/                 # Reusable components
│   ├── auth/                       # Authentication pages
│   ├── frontend-pages/             # Public pages
│   ├── api/                        # API routes
│   └── page.tsx                    # Root page
│
├── types/                          # TypeScript types
├── utils/                          # Utility functions
├── hooks/                          # Custom React hooks
│
public/
├── images/                         # Static images
```

---

## 🚀 Scripts

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
npm run lint
```

---

## 🔧 Recent Improvements (v10.0.0)

### ✅ Turbopack Compatibility Fixes
- **Fixed image imports** for Turbopack compatibility
- All image assets now use absolute paths: `/images/...`
- Removed relative imports from `public/` folder
- Optimized `next/Image` component usage

### ✅ Next.js 16 Serialization Fixes
- Fixed Client Component serialization errors
- Replaced `<Button component={Link} />` with native `<Link>` elements

### 📊 Build Performance
- **Turbopack compilation**: ~60 seconds
- **Build size**: Optimized with Turbopack
- **No module resolution errors**: ✓
- **Production ready**: ✓

---

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import Project in Vercel**
   - Go to [https://vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Deploy**
   - Automatic deployment on push to main

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
   ```bash
   git clone https://github.com/seyedahmaddv/seyedahmaddev2.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

4. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Turbopack Documentation](https://turbo.build/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Seyed Ahmad Dev**
- GitHub: [@seyedahmaddv](https://github.com/seyedahmaddv)
- Website: [https://seyedahmaddev.ir](https://seyedahmaddev.ir)

---

## 🙏 Acknowledgments

- Material-UI team for the amazing component library
- Next.js team for the framework
- All contributors and supporters

---

<div align="center">

**Made with ❤️ by Seyed Ahmad**

If you found this project helpful, please give it a ⭐ on GitHub!

</div>
