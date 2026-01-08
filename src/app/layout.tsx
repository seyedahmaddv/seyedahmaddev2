import React from "react";
import MyApp from "./app";
import NextTopLoader from 'nextjs-toploader';
import "./global.css";
import { CustomizerContextProvider } from "./context/customizerContext";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "SeyedAhmad — React & Next.js Developer",
  description: "Tutorials, projects, and real-world experiences in modern frontend development — React, Next.js, performance, and deployment best practices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTopLoader color="#5D87FF" />
        <CustomizerContextProvider>
          <MyApp>{children}</MyApp>
        </CustomizerContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
