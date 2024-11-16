import Image from "next/image";
import { latestNews } from "@/data/news";

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

export default function LatestNews({ news }: LatestNewsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="w-1 h-8 bg-red-600 mr-3"></span>
        Latest News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.map((item) => (
          <div key={item.id} className="flex gap-4 group cursor-pointer">
            <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="128px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div>
              <span className={`category-badge category-${item.category.toLowerCase()}`}>
                {item.category}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2 group-hover:text-red-600 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
              <span className="text-sm text-gray-500 mt-2 block">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
