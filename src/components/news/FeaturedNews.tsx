import Image from "next/image";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

interface FeaturedNewsProps {
  news: NewsItem[];
}

export default function FeaturedNews({ news }: FeaturedNewsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {news.map((item) => (
        <div key={item.id} className="news-card group">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className={`category-badge category-${item.category.toLowerCase()}`}>
                {item.category}
              </span>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2 news-title">
              {item.title}
            </h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <button className="text-red-600 hover:text-red-800 font-semibold transition-colors duration-200">
              Read More →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
