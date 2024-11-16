import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  isLarge?: boolean;
}

export function NewsCard({ id, title, description, image, category, date, isLarge = false }: NewsCardProps) {
  return (
    <Link href={`/news/${id}`} className="block">
      <div className="news-card group cursor-pointer">
        <div className="responsive-image-wrapper">
          <div>
            <div>
              <Image
                src={image}
                alt={title}
                fill
                sizes={isLarge ? "(max-width: 1280px) 100vw, 50vw" : "(max-width: 1280px) 50vw, 25vw"}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className={`category-badge category-${category.toLowerCase()}`}>
              {category}
            </span>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <h2 className={`${isLarge ? 'text-2xl' : 'text-lg'} font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200 line-clamp-2 news-title`}>
            {title}
          </h2>
          <p className={`text-gray-600 ${isLarge ? 'text-base' : 'text-sm'} line-clamp-2`}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
