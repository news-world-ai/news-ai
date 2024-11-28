'use client';

import { useState } from 'react';
import Link from 'next/link';

const menuItems = [
  { name: 'Home', path: '/home' },
  { name: 'News', path: '/news', hasDropdown: true },
  { name: 'Sport', path: '/sport' },
  { name: 'Business', path: '/business', hasDropdown: true },
  { name: 'Innovation', path: '/innovation', hasDropdown: true },
  { name: 'Culture', path: '/culture', hasDropdown: true },
  { name: 'Arts', path: '/arts', hasDropdown: true },
  { name: 'Travel', path: '/travel', hasDropdown: true },
  { name: 'Earth', path: '/earth', hasDropdown: true },
  { name: 'Video', path: '/video' },
  { name: 'Live', path: '/live', hasDropdown: true },
  { name: 'Audio', path: 'https://www.bbc.co.uk/sounds' },
  { name: 'Weather', path: 'https://www.bbc.com/weather' },
  { name: 'Newsletters', path: '/newsletters' }
];

export default function Sidebar() {
  const getRedirectUrl = (name: string, path: string) => {
    if (name.toLowerCase() === 'home') {
      return '/';
    }
    if (path.startsWith('http')) {
      return path;
    }
    return `https://www.bbc.com${path}`;
  };

  return (
    <aside className="w-[320px] bg-white h-screen fixed left-0 top-0 pt-14 overflow-y-auto z-50">
      <div className="px-4 py-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search news, topics and more"
            className="w-full h-[48px] pl-4 pr-16 border border-[#CCCCCC] text-[1.125rem] focus:outline-none"
          />
          <button className="absolute right-0 top-0 w-[64px] h-[48px] bg-[#2B2B2B] flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      <nav className="mt-4">
        {menuItems.map((item) => (
          <div 
            key={item.name}
            className="border-b border-[#EEEEEE] last:border-b-0"
          >
            <div className="flex items-center justify-between py-2 px-4 hover:bg-[#F6F6F6]">
              <Link 
                href={getRedirectUrl(item.name, item.path)}
                className="flex-grow text-[1rem] font-bold hover:text-[#4A14DC]"
              >
                {item.name}
              </Link>
              {item.hasDropdown && (
                <button className="ml-2 p-1">
                  <svg 
                    className="w-5 h-5"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
