'use client';

import Image from "next/image";
import Link from "next/link";
import { cryptoNews, featuredNews, type ArticleNewsItem } from "@/data/news";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ParsedSection {
  type: 'h1' | 'h2' | 'p';
  content: string;
}

function parseMarkdown(markdown: string): ParsedSection[] {
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

export default function Page() {
  const params = useParams();
  const id = parseInt(params.slug as string);
  const article = [...cryptoNews, ...featuredNews].find(news => news.id === id);
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
    <div className="bg-white min-h-screen">
      {/* CRYPTO Header */}
      <div className="border-b border-[#E6E6E6]">
        <div className="max-w-[1280px] mx-auto px-4">
          <h1 className="text-[2.75rem] font-bold text-[#BB1919] py-4">CRYPTO</h1>
        </div>
      </div>

      <main className="max-w-[1280px] mx-auto px-4">
        <div className="py-8">
          {/* Article Content */}
          <article className="mb-12">
            {/* Article Header */}
            <h1 className="text-3xl font-bold text-[#1B1B1B] mb-4 text-center">
              {article.title}
            </h1>
            <div className="flex items-center justify-center text-[13px] text-[#6E6E73] mb-6">
              <span>{article.date}</span>
              <span className="mx-2">|</span>
              <span>{article.category}</span>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={450}
                className="w-full"
                priority
                unoptimized={article.image.startsWith('http')}
              />
            </div>

            {/* Article Content */}
            {'articlePath' in article && markdownContent ? (
              <div className="space-y-6">
                {parsedContent.map((section, index) => {
                  switch (section.type) {
                    case 'h1':
                      return (
                        <h1 key={index} className="text-2xl font-bold text-[#1B1B1B] mt-8 mb-4">
                          {section.content}
                        </h1>
                      );
                    case 'h2':
                      return (
                        <h2 key={index} className="text-xl font-bold text-[#1B1B1B] mt-6 mb-3">
                          {section.content}
                        </h2>
                      );
                    default:
                      return (
                        <p key={index} className="text-[1.125rem] leading-relaxed text-[#3F3F42]">
                          {section.content}
                        </p>
                      );
                  }
                })}
              </div>
            ) : (
              <p className="text-[1.125rem] leading-relaxed text-[#3F3F42]">
                {article.description}
              </p>
            )}
          </article>

          {/* More News Section */}
          <div className="border-t border-[#E6E6E6] pt-8">
            <h2 className="text-xl font-bold mb-6">More News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...cryptoNews, ...featuredNews]
                .filter((news: ArticleNewsItem) => news.id !== id)
                .slice(0, 3)
                .map((story: ArticleNewsItem, index: number) => (
                  <Link href={`/crypto/${story.id}`} key={index} className="group">
                    <div className="pb-4">
                      <h3 className="font-bold mb-2 group-hover:text-[#4A14DC]">{story.title}</h3>
                      <p className="text-[0.9375rem] text-[#3F3F42] mb-2">{story.description}</p>
                      <div className="flex items-center text-[13px] text-[#6E6E73]">
                        <span>{story.date}</span>
                        <span className="mx-2">|</span>
                        <span>{story.category}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
