import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <header className="bg-white border-b">
          {/* Top Bar */}
          <div className="bg-gray-900 text-white py-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center text-sm">
                <div className="flex space-x-4">
                  <span>Edition: International</span>
                  <span>|</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex space-x-4">
                  <button className="hover:text-gray-300">Sign In</button>
                  <button className="hover:text-gray-300">Subscribe</button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-8">
                <h1 className="text-3xl font-bold text-red-600">News AI</h1>
                <nav className="hidden md:flex space-x-6">
                  <button className="text-gray-600 hover:text-gray-900">Live TV</button>
                  <button className="text-gray-600 hover:text-gray-900">Audio</button>
                  <button className="text-gray-600 hover:text-gray-900">Search</button>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                  Watch Live
                </button>
              </div>
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4">News AI</h2>
                <p className="text-gray-400">Your trusted source for breaking news and in-depth analysis.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Sections</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><button className="hover:text-white">World</button></li>
                  <li><button className="hover:text-white">Politics</button></li>
                  <li><button className="hover:text-white">Business</button></li>
                  <li><button className="hover:text-white">Technology</button></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">More</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><button className="hover:text-white">About Us</button></li>
                  <li><button className="hover:text-white">Contact</button></li>
                  <li><button className="hover:text-white">Careers</button></li>
                  <li><button className="hover:text-white">Advertise</button></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><button className="hover:text-white">Facebook</button></li>
                  <li><button className="hover:text-white">Twitter</button></li>
                  <li><button className="hover:text-white">Instagram</button></li>
                  <li><button className="hover:text-white">LinkedIn</button></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© {new Date().getFullYear()} News AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
