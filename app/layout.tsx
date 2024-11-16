import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto News AI - Latest Cryptocurrency News & Market Updates",
  description: "Stay informed with real-time cryptocurrency news, market analysis, and blockchain updates.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📰</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
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
                  <span>BTC/USD: $50,234.21</span>
                  <span className="text-green-400">+5.2%</span>
                  <span>|</span>
                  <span>ETH/USD: $2,890.15</span>
                  <span className="text-green-400">+3.8%</span>
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
                <h1 className="text-3xl font-bold">
                  <span className="text-red-600">Crypto</span>
                  <span className="text-gray-900">News AI</span>
                </h1>
                <nav className="hidden md:flex space-x-6">
                  <button className="text-gray-600 hover:text-gray-900">Markets</button>
                  <button className="text-gray-600 hover:text-gray-900">DeFi</button>
                  <button className="text-gray-600 hover:text-gray-900">NFTs</button>
                  <button className="text-gray-600 hover:text-gray-900">Research</button>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Get Market Updates
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
                <h2 className="text-xl font-bold mb-4">CryptoNews AI</h2>
                <p className="text-gray-400">Your trusted source for cryptocurrency news and market analysis.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Markets</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><button className="hover:text-white">Bitcoin</button></li>
                  <li><button className="hover:text-white">Ethereum</button></li>
                  <li><button className="hover:text-white">DeFi</button></li>
                  <li><button className="hover:text-white">NFTs</button></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><button className="hover:text-white">Market Analysis</button></li>
                  <li><button className="hover:text-white">Research</button></li>
                  <li><button className="hover:text-white">Price Alerts</button></li>
                  <li><button className="hover:text-white">Trading Tools</button></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><button className="hover:text-white">Twitter</button></li>
                  <li><button className="hover:text-white">Telegram</button></li>
                  <li><button className="hover:text-white">Discord</button></li>
                  <li><button className="hover:text-white">Newsletter</button></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© {new Date().getFullYear()} CryptoNews AI. All rights reserved.</p>
              <p className="mt-2 text-sm">Cryptocurrency prices are provided for informational purposes only.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
