'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">World</h3>
            <ul className="space-y-2">
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Africa</Link></li>
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Americas</Link></li>
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Asia</Link></li>
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Europe</Link></li>
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Middle East</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Politics</h3>
            <ul className="space-y-2">
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">The White House</Link></li>
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Congress</Link></li>
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Supreme Court</Link></li>
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Election Center</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Business</h3>
            <ul className="space-y-2">
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Markets</Link></li>
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Tech</Link></li>
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Media</Link></li>
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Success</Link></li>
              <li><Link href="/crypto" className="text-gray-400 hover:text-white text-sm sm:text-base">Crypto</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Entertainment</h3>
            <ul className="space-y-2">
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Movies</Link></li>
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Television</Link></li>
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Arts</Link></li>
              <li><Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Culture</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-red-600 mb-4 md:mb-0">NEWS AI</div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
              <Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Terms of Use</Link>
              <Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Privacy Policy</Link>
              <Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Accessibility & CC</Link>
              <Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">About Us</Link>
              <Link href="https://edition.cnn.com/" className="text-gray-400 hover:text-white text-sm sm:text-base">Contact Us</Link>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400 text-sm sm:text-base">
            © 2024 News AI. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
