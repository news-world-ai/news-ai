'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <div className="bg-gray-800 text-white py-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-6 overflow-x-auto">
          <Link 
            href="/"
            className={`text-sm whitespace-nowrap py-2 px-1 border-b-2 transition-colors duration-200 ${
              pathname === '/' 
                ? 'border-red-600 text-white' 
                : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/crypto"
            className={`text-sm whitespace-nowrap py-2 px-1 border-b-2 transition-colors duration-200 ${
              isCryptoActive
                ? 'border-red-600 text-white' 
                : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
            }`}
          >
            Crypto
          </Link>
          {categories.map((category) => (
            category.name !== 'Crypto' && (
              <button
                key={category.name}
                className={`text-sm whitespace-nowrap py-2 px-1 border-b-2 transition-colors duration-200 ${
                  category.active
                    ? 'border-red-600 text-white'
                    : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
                }`}
              >
                {category.name}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
