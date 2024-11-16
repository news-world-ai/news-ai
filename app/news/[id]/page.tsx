'use client';

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { breakingNews, featuredNews, latestNews } from "../../data/news";
import { articles } from "../../data/articles";
import Image from "next/image";

export default function NewsPage() {
  const params = useParams();
  const newsId = Number(params.id);
  
  // Get all news items
  const allNews = [breakingNews, ...featuredNews, ...latestNews];
  const news = allNews.find(item => item.id === newsId);
  const article = articles.find(item => item.id === newsId);

  if (!news) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <article className="prose lg:prose-xl mx-auto">
        <div className="mb-8">
          <span className={`category-badge category-${news.category.toLowerCase()}`}>
            {news.category}
          </span>
          <span className="ml-4 text-gray-500">{news.date}</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-6">{news.title}</h1>
        
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="text-xl mb-8">
          {news.description}
        </div>

        <div className="text-lg space-y-6 whitespace-pre-line">
          {article ? article.content : (
            <p>
              In a significant development that has captured the attention of the financial world, 
              this story represents a major shift in the landscape of digital assets and blockchain technology.
              
              Industry experts and analysts have weighed in on these developments, highlighting the potential 
              long-term implications for both institutional and retail investors.
              
              Market participants are closely monitoring these events, as they could signal a new era in the 
              evolution of digital finance and cryptocurrency adoption.
              
              As this story continues to unfold, stakeholders across the globe are preparing for potential 
              ripple effects throughout the broader financial ecosystem.
            </p>
          )}
        </div>
      </article>
    </main>
  );
}
