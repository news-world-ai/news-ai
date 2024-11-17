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

interface LatestNewsProps {
  news: NewsItem[];
}

export default function LatestNews({ news }: LatestNewsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
        <span className="w-1 h-8 bg-red-600 mr-3"></span>
        Latest News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {news.map((item) => {
          const WrapperComponent = item.externalLink ? 'a' : Link;
          const wrapperProps = item.externalLink 
            ? { href: item.externalLink, target: "_blank", rel: "noopener noreferrer" }
            : { href: `/news/${item.id}` };

          return (
            <WrapperComponent key={item.id} {...wrapperProps} className="flex flex-col sm:flex-row gap-3 sm:gap-4 group cursor-pointer">
              <div className="relative w-full sm:w-32 h-48 sm:h-32 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 128px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                  unoptimized={item.image.startsWith('http')}
                />
              </div>
              <div className="flex-1">
                <span className={`inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold rounded-full ${
                  item.category === 'Politics' ? 'bg-red-100 text-red-800' :
                  item.category === 'Technology' ? 'bg-blue-100 text-blue-800' :
                  item.category === 'Environment' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-2 mb-2 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-2">{item.description}</p>
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
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
