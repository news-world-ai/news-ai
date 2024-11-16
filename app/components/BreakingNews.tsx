import Image from "next/image";
import Link from "next/link";

interface BreakingNewsProps {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

export function BreakingNews({ id, title, description, image, date }: BreakingNewsProps) {
  return (
    <Link href={`/news/${id}`} className="block">
      <div className="group cursor-pointer">
        <div className="responsive-image-wrapper">
          <div>
            <div>
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 66vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className="category-badge category-breaking">
                  Breaking News
                </span>
                <span className="text-sm text-gray-300">{date}</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-200">
                {title}
              </h1>
              <p className="text-lg text-gray-200 line-clamp-2">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
