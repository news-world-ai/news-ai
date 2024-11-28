import Image from 'next/image';
import Link from 'next/link';
import { NewsItem } from '@/lib/fetchNews';

interface MainStoryProps {
  story: NewsItem;
  timeAgo: string;
}

export default function MainStory({ story, timeAgo }: MainStoryProps) {
  return (
    <article className="px-2 sm:px-4 lg:px-0">
      <Link href="#" className="block group">
        <div className="relative">
          <Image
            src={story.image}
            alt={story.title}
            width={800}
            height={450}
            className="w-full h-auto rounded-sm sm:rounded"
            priority
          />
        </div>
        <div className="mt-2 sm:mt-3 lg:mt-4">
          <h1 className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] leading-[1.5rem] sm:leading-[1.875rem] lg:leading-[2.125rem] font-bold text-[#1B1B1B] group-hover:text-[#4A14DC] font-serif">
            {story.title}
          </h1>
          <p className="mt-2 sm:mt-2.5 lg:mt-3 text-[0.875rem] sm:text-[0.9375rem] leading-[1.25rem] sm:leading-[1.375rem] text-[#3F3F42]">
            {story.description}
          </p>
          <div className="mt-2 sm:mt-2.5 lg:mt-3 flex items-center text-[0.75rem] sm:text-[0.8125rem] text-[#6E6E73]">
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
