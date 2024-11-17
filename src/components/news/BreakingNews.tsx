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

interface BreakingNewsProps {
  news: NewsItem;
}

export default function BreakingNews({ news }: BreakingNewsProps) {
  const WrapperComponent = news.externalLink ? 'a' : Link;
  const wrapperProps = news.externalLink 
    ? { href: news.externalLink, target: "_blank", rel: "noopener noreferrer" }
    : { href: `/news/${news.id}` };

  return (
    <WrapperComponent {...wrapperProps} className="block">
      <div className="relative h-[500px] rounded-lg overflow-hidden group">
        <Image
          src={news.image}
          alt={news.title}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
          unoptimized={news.image.startsWith('http')}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-md animate-pulse">
                Breaking News
              </span>
              <span className="text-gray-300 text-sm">{news.date}</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
              {news.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              {news.description}
            </p>
            <div className="mt-6 flex items-center">
              <span className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 inline-flex items-center">
                Read Full Story
                {news.externalLink && (
                  <svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </WrapperComponent>
  );
}
