'use client';

import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  externalLink?: string;
  articlePath?: string;
}

interface CryptoNewsProps {
  news: NewsItem[];
}

export default function CryptoNews({ news }: CryptoNewsProps) {
  // Sort news by date in descending order (newest first)
  const sortedNews = [...news].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-12">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
        <span className="w-1 h-8 bg-blue-600 mr-3"></span>
        Crypto Market Updates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {sortedNews.map((item) => {
          const WrapperComponent = item.externalLink ? 'a' : Link;
          const wrapperProps = item.externalLink 
            ? { href: item.externalLink, target: "_blank", rel: "noopener noreferrer" }
            : { href: `/crypto/${item.id}` };

          return (
            <WrapperComponent 
              key={item.id} 
              {...wrapperProps}
              className="block border rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                  unoptimized
                  loading="eager"
                />
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-500">{item.date}</span>
                  {item.externalLink && (
                    <svg 
                      className="w-4 h-4 text-gray-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  )}
                </div>
              </div>
            </WrapperComponent>
          );
        })}
      </div>
    </div>
  );
}
