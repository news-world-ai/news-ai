import { NewsCard } from "./NewsCard";

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

export function FeaturedNews({ news }: FeaturedNewsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {news.map((item, index) => (
        <div 
          key={item.id} 
          className={`${
            index === 0 ? 'md:col-span-2 md:row-span-2' : ''
          }`}
        >
          <NewsCard
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            category={item.category}
            date={item.date}
            isLarge={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
