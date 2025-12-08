# 📊 Seyedahmaddev Next.js Admin Dashboard

یک وب سایت نکست جی اس حرفه‌ای و مدرن با **Next.js 16** و **Material-UI**

---

## 🎯 درباره پروژه

**Seyedahmaddev** یک قالب admin dashboard پیشرفته است که برای ساخت سریع و آسان پانل‌های مدیریت تصمیم‌گیری‌شده است. این پروژه با بهترین تکنولوژی‌های روز و best practices ساخته شده‌است.

### ✨ ویژگی‌های اصلی:

- 📱 **Responsive Design** - سازگار با تمام دستگاه‌ها
- 🎨 **Material-UI (v7)** - کمپوننت‌های زیبا و قابل شخصی‌سازی
- ⚡ **Next.js 16 + Turbopack** - بهترین performance
- 🔤 **TypeScript** - کد امن و قابل توسعه
- 📊 **چارت‌های پیشرفته** - ApexCharts و MUI Charts
- 📅 **تقویم و Date Picker** - مدیریت تاریخ آسان
- 🗂️ **جدول‌های پیشرفته** - TanStack React Table
- 🎯 **کنترل دسترسی** - CASL برای RBAC
- 🌍 **چندزبانی** - i18next (فارسی، انگلیسی، چینی، فرانسوی)
- 🎭 **Drag & Drop** - @hello-pangea/dnd و dnd-kit
- 📝 **ویرایشگر متنی** - Tiptap برای محتوای غنی
- 🔐 **Authentication** - پشتیبانی NextAuth.js
- 🎨 **Dark/Light Theme** - تم‌های تاریک و روشن

---

## 🛠️ تکنولوژی‌های استفاده‌شده

### Frontend Framework
- **Next.js 16.0.7** - React framework برای production
- **React 19** - کتابخانه‌ی UI
- **TypeScript 5** - Type-safe JavaScript

### UI & Styling
- **Material-UI (MUI v7)** - کمپوننت‌های Material Design
- **Emotion** - CSS-in-JS styling
- **Framer Motion** - انیمیشن‌های نرم و جذاب

### Data & State Management
- **TanStack React Table v8** - جدول‌های قدرتمند
- **Formik + Yup** - مدیریت فرم‌ها
- **Moment.js & date-fns** - کار با تاریخ

### Charts & Data Visualization
- **ApexCharts** - چارت‌های تعاملی
- **MUI X Charts** - چارت‌های MUI
- **MUI X Tree View** - درخت‌های سلسله‌مراتبی

### Features & Plugins
- **Drag & Drop:**
  - @hello-pangea/dnd
  - @dnd-kit (advanced)
  
- **Rich Text Editor:**
  - Tiptap (Editor core)
  - mui-tiptap (MUI integration)
  
- **Access Control:**
  - CASL (@casl/ability) - Role-Based Access Control
  
- **Internationalization:**
  - i18next - چندزبانی
  
- **Other:**
  - emoji-picker-react - انتخابگر emoji
  - lodash - utility functions
  - gray-matter - Front Matter parsing

---

## 📁 ساختار پروژه

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── (DashboardLayout)/         # Dashboard layout group
│   │   ├── layout.tsx            # Sidebar + Header
│   │   ├── dashboard/            # Dashboard pages
│   │   ├── apps/                 # App modules
│   │   │   ├── blog/             # Blog app
│   │   │   ├── calendar/         # Calendar
│   │   │   ├── chat/             # Chat
│   │   │   ├── contacts/         # مخاطبین
│   │   │   ├── email/            # Email
│   │   │   ├── invoice/          # صورت‌حساب
│   │   │   ├── kanban/           # Kanban board
│   │   │   ├── notes/            # یادداشت‌ها
│   │   │   ├── ticket/           # تیکت‌ها
│   │   │   └── user-profile/     # پروفایل کاربر
│   │   ├── charts/               # نمودارها
│   │   ├── forms/                # فرم‌ها
│   │   ├── tables/               # جدول‌ها
│   │   ├── ui-components/        # MUI components
│   │   ├── widgets/              # widget‌ها
│   │   └── theme-pages/          # صفحات تم
│   │
│   ├── auth/                     # Authentication pages
│   │   ├── auth1/ & auth2/       # Auth layouts
│   │   ├── login/
│   │   ├── register/
│   │   └── authForms/
│   │
│   ├── frontend-pages/           # Public pages
│   │   ├── homepage/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── portfolio/
│   │   └── pricing/
│   │
│   ├── api/                      # API routes
│   │   ├── blog/
│   │   ├── chat/
│   │   ├── contacts/
│   │   ├── kanban/
│   │   └── ...
│   │
│   └── components/               # Reusable components
│       ├── apps/
│       ├── charts/
│       ├── dashboards/
│       ├── forms/
│       ├── layout/
│       ├── tables/
│       ├── ui-components/
│       ├── widgets/
│       ├── shared/
│       └── container/
│
├── context/                      # React Context
│   ├── config.ts                 # Config context
│   ├── customizerContext.tsx     # Theme customizer
│   ├── BlogContext/
│   ├── ChatContext/
│   ├── Ecommercecontext/
│   ├── EmailContext/
│   └── ...
│
├── utils/                        # Utility functions
│   ├── i18n.ts                   # i18next config
│   ├── markdown.ts
│   ├── theme.ts
│   ├── languages/                # Translation files
│   └── theme/                    # Theme configuration
│       ├── Components.tsx
│       ├── DarkThemeColors.tsx
│       ├── DefaultColors.tsx
│       ├── Theme.tsx
│       └── Typography.tsx
│
└── (DashboardLayout)/
    └── types/                    # TypeScript types
        └── auth/

public/
├── images/
│   ├── backgrounds/
│   ├── blog/
│   ├── kanban/
│   ├── landingpage/
│   ├── logos/
│   └── ...
└── ...
```

---

## 🚀 شروع سریع

### پیش‌نیازها:
- Node.js 18+ 
- npm یا yarn یا pnpm

### نصب و اجرا:

```bash
# Clone پروژه
git clone https://github.com/seyedahmaddv/seyedahmaddev2.git
cd packages/typescript/dark

# نصب dependencies
npm install

# اجرای development server
npm run dev

# باز کردن در مرورگر
# http://localhost:3000
```

### Build برای Production:

```bash
npm run build
npm start
```

---

## 📖 استفاده از ویژگی‌ها

### 1. **Theme Customizer**
```tsx
import { useContext } from 'react';
import { CustomizerContext } from '@/app/context/customizerContext';

export default function MyComponent() {
  const { theme, toggleTheme } = useContext(CustomizerContext);
  
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
```

### 2. **چندزبانی**
```tsx
import { useTranslation } from 'react-i18next';

export default function MyComponent() {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => i18n.changeLanguage('fa')}>
        فارسی
      </button>
    </div>
  );
}
```

### 3. **React Table**
```tsx
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';

const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
});
```

### 4. **RBAC با CASL**
```tsx
import { useAbility } from '@casl/react';

export default function AdminPanel() {
  const ability = useAbility();
  
  return ability.can('read', 'Admin') ? (
    <div>Admin Panel</div>
  ) : (
    <div>Access Denied</div>
  );
}
```

---

## 🎨 تنظیمات Theme

تمام رنگ‌ها و استایل‌ها قابل شخصی‌سازی هستند:

```tsx
// src/utils/theme/DarkThemeColors.tsx
export const dark = {
  primary: '#1976d2',
  secondary: '#ec407a',
  // ... رنگ‌های بیشتر
};
```

---

## 📱 صفحات موجود

### Dashboard
- 📊 Modern Dashboard
- 📈 eCommerce Dashboard

### Apps
- 📅 Calendar
- 💬 Chat
- 📧 Email
- 📝 Blog
- 🗂️ Contacts
- 📄 Invoice
- 📋 Kanban Board
- 🎫 Tickets
- 📌 Notes
- 👤 User Profile

### Pages
- 📊 Charts (Line, Bar, Pie, etc.)
- 📋 Tables (with sorting, filtering)
- 🎨 UI Components
- 📝 Forms (with validation)
- 🔧 Widgets

### Authentication
- 🔐 Login (2 layouts)
- 📝 Register
- 🔑 Forgot Password
- ✅ 2FA

### Frontend Pages
- 🏠 Homepage
- ℹ️ About
- 📚 Blog
- 📧 Contact
- 🎨 Portfolio
- 💰 Pricing

---

## 🔧 Configuration

### Environment Variables:
```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### tsconfig.json:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

---

## 🌐 زبان‌های پشتیبانی‌شده

- 🇬🇧 English (en)
- 🇮🇷 فارسی (fa)
- 🇨🇳 中文 (ch)
- 🇫🇷 Français (fr)

---

## 📦 اندازه Bundle

با استفاده از **Turbopack** و **Next.js 16**:
- **Core Bundle:** ~150KB (gzipped)
- **بدون dependencies خارجی غیر ضروری**

---

## 🤝 مشارکت

برای مشارکت در توسعه:

```bash
# Clone کنید
git clone https://github.com/seyedahmaddv/seyedahmaddev2.git

# برنچ جدید بسازید
git checkout -b feature/new-feature

# تغییرات را commit کنید
git commit -m "Add new feature"

# Push کنید
git push origin feature/new-feature
```

---

## 📄 لایسنس

MIT License - برای استفاده‌ی تجاری و شخصی آزاد است

---

## 📞 تماس و پشتیبانی

- 🐙 **GitHub:** [@seyedahmaddv](https://github.com/seyedahmaddv)
- 📧 **Email:** info@seyedahmaddev.ir
- 🌐 **Website:** https://seyedahmaddev.ir

---

## 🎉 سپاس

از تمام کتابخانه‌ها و ابزارهایی که این پروژه را ممکن کردند:
- Next.js team
- Material-UI
- React community
- و همه‌ی مشارکین

---

**نسخه:** 10.0.0  
**آخرین بروزرسانی:** December 2025  
**وضعیت:** Production Ready ✅
