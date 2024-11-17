'use client';

import Image from "next/image";
import { featuredNews, latestNews, breakingNews } from "@/data/news";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

function parseMarkdown(markdown: string) {
  const sections = markdown.split('\n\n');
  return sections.map(section => {
    if (section.startsWith('# ')) {
      return {
        type: 'h1',
        content: section.replace('# ', '')
      };
    } else if (section.startsWith('## ')) {
      return {
        type: 'h2',
        content: section.replace('## ', '')
      };
    } else {
      return {
        type: 'p',
        content: section
      };
    }
  });
}

export default function NewsArticle() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const allNews = [breakingNews, ...featuredNews, ...latestNews];
  const article = allNews.find(news => news.id === id);
  const [markdownContent, setMarkdownContent] = useState<string>("");
  
  if (!article) {
    notFound();
  }

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      if ('articlePath' in article && article.articlePath) {
        try {
          const response = await fetch(`/api/markdown?path=${article.articlePath}`);
          const content = await response.text();
          setMarkdownContent(content);
        } catch (error) {
          console.error('Error loading markdown:', error);
        }
      }
    };

    fetchMarkdownContent();
  }, [article]);

  const parsedContent = markdownContent ? parseMarkdown(markdownContent) : [];

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
            <span>{article.category}</span>
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={article.image.startsWith('http')}
          />
        </div>

        {/* Article Content */}
        <article className="max-w-none">
          {'articlePath' in article && markdownContent ? (
            <div className="space-y-6">
              {parsedContent.map((section, index) => {
                if (section.type === 'h1') {
                  return (
                    <h1 key={index} className="text-4xl font-bold text-gray-900 mt-12 mb-6">
                      {section.content}
                    </h1>
                  );
                } else if (section.type === 'h2') {
                  return (
                    <h2 key={index} className="text-3xl font-bold text-gray-900 mt-10 mb-6">
                      {section.content}
                    </h2>
                  );
                } else {
                  return (
                    <p key={index} className="text-xl text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  );
                }
              })}
            </div>
          ) : (
            <p className="text-xl text-gray-700 leading-relaxed">
              {article.description}
            </p>
          )}
        </article>
      </main>
    </div>
  );
}
