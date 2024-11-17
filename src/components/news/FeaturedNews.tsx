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

interface FeaturedNewsProps {
  news: NewsItem[];
}

export default function FeaturedNews({ news }: FeaturedNewsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {news.map((item) => {
        const WrapperComponent = item.externalLink ? 'a' : Link;
        const wrapperProps = item.externalLink 
          ? { href: item.externalLink, target: "_blank", rel: "noopener noreferrer" }
          : { href: `/news/${item.id}` };

        return (
          <WrapperComponent key={item.id} {...wrapperProps} className="block">
            <div className="news-card group bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold rounded-full ${
                    item.category === 'Politics' ? 'bg-red-100 text-red-800' :
                    item.category === 'Technology' ? 'bg-blue-100 text-blue-800' :
                    item.category === 'Science' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">{item.date}</span>
                </div>
                <h2 className="text-base sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center text-red-600 hover:text-red-800 font-semibold text-sm sm:text-base transition-colors duration-200">
                  Read More 
                  <span className="ml-1">→</span>
                  {item.externalLink && (
                    <svg 
                      className="w-4 h-4 ml-1" 
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
            </div>
          </WrapperComponent>
        );
      })}
    </div>
  );
}
