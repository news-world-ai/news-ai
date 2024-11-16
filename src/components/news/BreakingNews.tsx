import Image from "next/image";

interface BreakingNewsProps {
  news: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    date: string;
  };
}

export default function BreakingNews({ news }: BreakingNewsProps) {
  return (
    <div className="relative h-[500px] rounded-lg overflow-hidden group">
      <Image
        src={news.image}
        alt={news.title}
        fill
        sizes="(max-width: 1280px) 100vw, 1280px"
        priority
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
          <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200">
            Read Full Story
          </button>
        </div>
      </div>
    </div>
  );
}
