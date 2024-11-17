import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { categories } from "@/data/news";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News AI - Breaking News, Latest Updates & Analysis",
  description: "Stay informed with the latest breaking news, in-depth analysis, and comprehensive coverage from News AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation categories={categories} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
