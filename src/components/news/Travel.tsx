import Image from 'next/image';
import Link from 'next/link';

interface TravelStory {
  title: string;
  description: string;
  image: string;
}

interface TravelProps {
  story: TravelStory;
}

export default function Travel({ story }: TravelProps) {
  return (
    <section className="border-t border-[#E6E6E6] py-4 sm:py-6 lg:py-8 px-2 sm:px-4 lg:px-0">
      <h2 className="text-[1.25rem] sm:text-[1.5rem] lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 flex items-center">
        Travel
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </h2>
      <div className="relative">
        <Link href="#" className="group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6">
            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-sm sm:rounded">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={800}
                  height={450}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-center">
              <h3 className="text-[1.25rem] sm:text-[1.5rem] lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 group-hover:text-[#4A14DC] underline">
                {story.title}
              </h3>
              <p className="text-[0.875rem] sm:text-[0.9375rem] leading-snug text-[#3F3F42]">
                {story.description}
              </p>
              <button className="mt-3 sm:mt-4 border border-black px-3 sm:px-4 py-1.5 sm:py-2 text-[0.875rem] sm:text-sm inline-block w-fit hover:bg-[#F6F6F6] transition-colors rounded-sm sm:rounded">
                See more
              </button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
