'use client';

import Image from "next/image";
import { cryptoNews } from "@/data/news";
import { notFound, useParams } from "next/navigation";

export default function CryptoArticle() {
  const params = useParams();
  const article = cryptoNews.find(news => news.id === parseInt(params.id as string));
  
  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
            <span>{article.date}</span>
            <span>•</span>
            <span>5 minute read</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] mb-8">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="prose lg:prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            {article.description}
          </p>
          
          {/* Market Data */}
          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Market Update</h2>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-600">Current Price:</span>
                <span className="ml-2 font-bold text-gray-900">{article.price}</span>
              </div>
              <div>
                <span className={`font-medium ${
                  article.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {article.change}
                </span>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Market Analysis</h2>
            <p className="text-gray-700 mb-4">
              The cryptocurrency market continues to show significant movement as institutional investors increase their presence in the digital asset space. Market analysts point to growing adoption rates and regulatory developments as key factors influencing current trends.
            </p>
            <p className="text-gray-700">
              Experts suggest that the current market conditions could indicate a broader shift in how digital assets are perceived by traditional financial institutions. The increasing integration of blockchain technology across various sectors may contribute to sustained growth in the cryptocurrency market.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
