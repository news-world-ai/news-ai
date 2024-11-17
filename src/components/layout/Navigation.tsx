'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Category {
  name: string;
  active: boolean;
}

interface NavigationProps {
  categories: Category[];
}

export default function Navigation({ categories }: NavigationProps) {
  const pathname = usePathname();
  const isCryptoActive = pathname.includes('/crypto');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-[#0c0c0c] text-white py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-sm hidden sm:block">Edition: International</div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-sm hover:text-red-500">Sign in</Link>
              <Link href="/" className="text-sm hover:text-red-500 hidden sm:inline">Follow</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-red-600">NEWS AI</span>
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Search */}
          <div className="hidden sm:flex items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Categories */}
        <div className="hidden sm:flex space-x-6 overflow-x-auto py-3">
          <Link 
            href="/"
            className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              pathname === '/' 
                ? 'text-red-600' 
                : 'text-gray-900 hover:text-red-600'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/crypto"
            className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              isCryptoActive
                ? 'text-red-600' 
                : 'text-gray-900 hover:text-red-600'
            }`}
          >
            Crypto
          </Link>
          {categories.map((category) => (
            category.name !== 'Crypto' && (
              <Link
                href={`https://edition.cnn.com/`}
                key={category.name}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  category.active
                    ? 'text-red-600'
                    : 'text-gray-900 hover:text-red-600'
                }`}
              >
                {category.name}
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden bg-white border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/' 
                ? 'text-red-600 bg-red-50' 
                : 'text-gray-900 hover:text-red-600 hover:bg-red-50'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/crypto"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isCryptoActive
                ? 'text-red-600 bg-red-50' 
                : 'text-gray-900 hover:text-red-600 hover:bg-red-50'
            }`}
          >
            Crypto
          </Link>
          {categories.map((category) => (
            category.name !== 'Crypto' && (
              <Link
                href={`https://edition.cnn.com/`}
                key={category.name}
                target="_blank"
                rel="noopener noreferrer"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  category.active
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-900 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {category.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}
