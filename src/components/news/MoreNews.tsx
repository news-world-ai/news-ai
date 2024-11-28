import Link from 'next/link';

interface NewsItem {
  title: string;
  time: string;
  category: string;
}

interface MoreNewsProps {
  stories: NewsItem[];
}

export default function MoreNews({ stories }: MoreNewsProps) {
  return (
    <section className="border-t border-[#E6E6E6] py-4 sm:py-6 lg:py-8 px-2 sm:px-4 lg:px-0">
      <h2 className="text-[1.25rem] sm:text-[1.5rem] lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 flex items-center">
        More news
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        {stories.map((story, index) => (
          <article key={index} className="border-b sm:border-b-0 border-[#E6E6E6] pb-4 sm:pb-0">
            <Link href="#" className="group">
              <h3 className="text-[0.9375rem] sm:text-[1rem] font-bold leading-tight group-hover:text-[#4A14DC]">
                {story.title}
              </h3>
              <div className="flex items-center text-[0.75rem] sm:text-[0.8125rem] text-[#6E6E73] mt-1.5 sm:mt-2">
                <span>{story.time}</span>
                {story.category && (
                  <>
                    <span className="mx-1.5 sm:mx-2">|</span>
                    <span>{story.category}</span>
                  </>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
