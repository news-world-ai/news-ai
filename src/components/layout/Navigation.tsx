'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Sidebar from "./Sidebar";

interface Category {
  name: string;
  path: string;
  active: boolean;
}

interface NavigationProps {
  categories: Category[];
}

export default function Navigation({ categories }: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const getRedirectUrl = (name: string, path: string) => {
    if (name.toLowerCase() === 'home') {
      return '/';
    }
    return `https://www.bbc.com${path}`;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        {/* Top Bar */}
        <div className="border-b border-[#E6E6E6]">
          <div className="max-w-[1280px] mx-auto px-2 sm:px-4 lg:px-6">
            <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16">
              {/* Left Section */}
              <div className="flex items-center">
                <button 
                  onClick={() => setSidebarOpen(!isSidebarOpen)}
                  className="p-1.5 sm:p-2 hover:bg-[#F6F6F6]"
                  aria-label="Menu"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <button 
                  className="p-1.5 sm:p-2 hover:bg-[#F6F6F6] ml-1 sm:ml-2"
                  aria-label="Search"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              {/* Center Logo */}
              <Link href="/" className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                <div className="flex space-x-[1px]">
                  <div className="bg-black text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] font-bold">N</div>
                  <div className="bg-black text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] font-bold">E</div>
                  <div className="bg-black text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] font-bold">W</div>
                  <div className="bg-black text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] font-bold">Z</div>
                </div>
              </Link>

              {/* Right Section */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Link 
                  href="#"
                  className="hidden sm:block bg-black text-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 text-[0.8125rem] sm:text-[0.875rem] font-medium hover:bg-[#1B1B1B] transition-colors"
                >
                  Register
                </Link>
                <Link 
                  href="#"
                  className="text-black hover:text-[#1B1B1B] text-[0.8125rem] sm:text-[0.875rem] font-medium transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation - Hidden on mobile (sm) */}
        <nav className="hidden md:block border-b border-[#E6E6E6] bg-white">
          <div className="max-w-[1280px] mx-auto px-2 sm:px-4 lg:px-6">
            {/* Desktop Categories */}
            <div className="hidden lg:flex items-center justify-center space-x-6 h-10 sm:h-12 overflow-x-auto">
              {categories.map((category, index) => (
                <Link
                  key={category.name}
                  href={getRedirectUrl(category.name, category.path)}
                  className={`text-[0.875rem] sm:text-[0.9375rem] font-bold whitespace-nowrap ${
                    index === 0 ? 'border-b-4 border-black' : ''
                  } hover:text-[#1B1B1B]`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
            {/* Tablet Category Toggle */}
            <div className="lg:hidden flex items-center h-10 sm:h-12">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-between w-full py-2"
              >
                <span className="text-[0.875rem] sm:text-[0.9375rem] font-bold">Categories</span>
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      {isSidebarOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
          <Sidebar />
        </>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[104px] lg:top-[112px] left-0 right-0 bg-white border-b border-[#E6E6E6] shadow-lg lg:hidden z-40">
          <div className="max-w-[1280px] mx-auto">
            <nav className="divide-y divide-[#E6E6E6]">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={getRedirectUrl(category.name, category.path)}
                  className="block px-4 py-2.5 sm:py-3 text-[0.8125rem] sm:text-[0.875rem] font-medium hover:bg-[#F6F6F6]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
