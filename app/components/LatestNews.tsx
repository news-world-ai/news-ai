import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

interface LatestNewsProps {
  news: NewsItem[];
}

export function LatestNews({ news }: LatestNewsProps) {
  return (
    <div className="space-y-6">
      {news.map((item) => (
        <Link href={`/news/${item.id}`} key={item.id} className="block">
          <div className="flex gap-4 group cursor-pointer border-b pb-6 last:border-b-0">
            <div className="latest-news-image">
              <div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="128px"
                  className="object-cover rounded-sm transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className={`category-badge category-${item.category.toLowerCase()}`}>
                  {item.category}
                </span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 pr-4">
                {item.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
