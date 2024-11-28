import Image from 'next/image';
import Link from 'next/link';
import { NewsItem } from '@/lib/fetchNews';

interface NewsCardProps {
  story: NewsItem;
  timeAgo: string;
  imageSize?: 'small' | 'large';
}

export default function NewsCard({ story, timeAgo, imageSize = 'large' }: NewsCardProps) {
  if (imageSize === 'small') {
    return (
      <article className="px-2 sm:px-4 lg:px-0">
        <Link href="#" className="flex space-x-2 sm:space-x-3 lg:space-x-4 group">
          <div className="overflow-hidden flex-shrink-0 w-[8rem] sm:w-[10rem] lg:w-[12rem] rounded-sm sm:rounded">
            <Image
              src={story.image}
              alt={story.title}
              width={192}
              height={108}
              className="w-full h-[72px] sm:h-[90px] lg:h-[108px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="text-[0.875rem] sm:text-[0.9375rem] lg:text-[1rem] leading-[1.125rem] sm:leading-[1.25rem] font-bold text-[#1B1B1B] group-hover:text-[#4A14DC] line-clamp-3">
              {story.title}
            </h3>
            <p className="mt-1 sm:mt-1.5 lg:mt-2 text-[0.8125rem] sm:text-[0.875rem] lg:text-[0.9375rem] leading-[1.25rem] sm:leading-[1.375rem] text-[#3F3F42] line-clamp-2 hidden sm:block">
              {story.description}
            </p>
            <div className="mt-1 sm:mt-1.5 lg:mt-2 flex items-center text-[0.75rem] sm:text-[0.8125rem] text-[#6E6E73]">
              <span>{timeAgo}</span>
              {story.category && (
                <>
                  <span className="mx-1.5 sm:mx-2">|</span>
                  <span>{story.category}</span>
                </>
              )}
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="px-2 sm:px-4 lg:px-0">
      <Link href="#" className="block group">
        <div className="overflow-hidden rounded-sm sm:rounded">
          <Image
            src={story.image}
            alt={story.title}
            width={400}
            height={225}
            className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mt-2 sm:mt-2.5 lg:mt-3">
          <h3 className="text-[1rem] sm:text-[1.0625rem] lg:text-[1.125rem] leading-[1.25rem] sm:leading-[1.375rem] font-bold text-[#1B1B1B] group-hover:text-[#4A14DC]">
            {story.title}
          </h3>
          <p className="mt-1.5 sm:mt-2 text-[0.875rem] sm:text-[0.9375rem] leading-[1.25rem] sm:leading-[1.375rem] text-[#3F3F42]">
            {story.description}
          </p>
          <div className="mt-1.5 sm:mt-2 flex items-center text-[0.75rem] sm:text-[0.8125rem] text-[#6E6E73]">
            <span>{timeAgo}</span>
            {story.category && (
              <>
                <span className="mx-1.5 sm:mx-2">|</span>
                <span>{story.category}</span>
              </>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
