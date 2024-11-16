'use client';

import Image from "next/image";
import Link from "next/link";
import { cryptoNews } from "@/data/news";

export default function CryptoNews() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="w-1 h-8 bg-blue-600 mr-3"></span>
        Crypto Market Updates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cryptoNews.map((news) => (
          <Link 
            href={`/crypto/${news.id}`} 
            key={news.id} 
            className="block border rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={news.image}
                alt={news.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                  {news.category}
                </span>
                {news.price && (
                  <span className="text-sm font-medium text-gray-900">
                    {news.price}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {news.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {news.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{news.date}</span>
                <span className={`text-sm font-medium ${
                  news.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {news.change}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
