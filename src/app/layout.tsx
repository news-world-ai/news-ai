import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEWZ - Breaking News Updates",
  description: "Visit NEWZ for up-to-the-minute news, breaking news, video, audio and feature stories.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'mask-icon',
      url: '/favicon.svg',
      color: '#000000'
    }
  },
};

const categories = [
  { name: "Home", path: "/home", active: true },
  { name: "News", path: "/news", active: false },
  { name: "Sport", path: "/sport", active: false },
  { name: "Business", path: "/business", active: false },
  { name: "Innovation", path: "/innovation", active: false },
  { name: "Culture", path: "/culture", active: false },
  { name: "Arts", path: "/arts", active: false },
  { name: "Travel", path: "/travel", active: false },
  { name: "Earth", path: "/future-planet", active: false },
  { name: "Video", path: "/video", active: false },
  { name: "Live", path: "/live", active: false }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://static.files.bbci.co.uk/fonts/reith/2.512/BBCReithSans_W_Rg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://static.files.bbci.co.uk/fonts/reith/2.512/BBCReithSerif_W_Rg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style>
          {`
            @font-face {
              font-family: 'ReithSans';
              src: url('https://static.files.bbci.co.uk/fonts/reith/2.512/BBCReithSans_W_Rg.woff2') format('woff2');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: 'ReithSerif';
              src: url('https://static.files.bbci.co.uk/fonts/reith/2.512/BBCReithSerif_W_Rg.woff2') format('woff2');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
          `}
        </style>
      </head>
      <body className="min-h-screen bg-white flex flex-col">
        <Navigation categories={categories} />
        <div className="pt-[3.5rem] flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
