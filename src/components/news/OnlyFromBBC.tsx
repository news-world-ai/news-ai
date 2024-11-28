import Image from 'next/image';
import Link from 'next/link';

interface Story {
  title: string;
  description: string;
  image: string;
  time: string;
  category: string;
}

interface OnlyFromBBCProps {
  stories: Story[];
}

export default function OnlyFromBBC({ stories }: OnlyFromBBCProps) {
  return (
    <section className="border-t border-[#E6E6E6] py-4 sm:py-6 lg:py-8 px-2 sm:px-4 lg:px-0">
      <h2 className="text-[1.25rem] sm:text-[1.5rem] lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6">
        Only from the BBC
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {stories.map((story, index) => (
          <article key={index} className="pb-4 sm:pb-0">
            <Link href="#" className="group">
              <div className="overflow-hidden rounded-sm sm:rounded">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={640}
                  height={360}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-2 sm:mt-3 lg:mt-4 text-[1.125rem] sm:text-[1.25rem] lg:text-xl font-bold leading-tight group-hover:text-[#4A14DC]">
                {story.title}
              </h3>
              <p className="mt-1.5 sm:mt-2 text-[0.875rem] sm:text-[0.9375rem] leading-snug text-[#3F3F42]">
                {story.description}
              </p>
              <div className="flex items-center text-[0.75rem] sm:text-[0.8125rem] text-[#6E6E73] mt-1.5 sm:mt-2">
                <span>{story.time}</span>
                <span className="mx-1.5 sm:mx-2">|</span>
                <span>{story.category}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
