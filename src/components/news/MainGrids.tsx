import Image from 'next/image';
import Link from 'next/link';

interface TimeTagProps {
  time: string;
  category?: string;
}

function TimeTag({ time, category }: TimeTagProps) {
  return (
    <div className="flex items-center text-[0.75rem] sm:text-[0.8125rem] text-[#6E6E73] mt-1.5 sm:mt-2">
      <span>{time}</span>
      {category && (
        <>
          <span className="mx-1.5 sm:mx-2">|</span>
          <span>{category}</span>
        </>
      )}
    </div>
  );
}

export default function MainGrids() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 py-4 sm:py-6 lg:py-8 px-2 sm:px-4 lg:px-0">
      {/* Section 1: Left Column */}
      <div className="lg:col-span-4">
        {/* Main Story with BBC Verify */}
        <article>
          <Link href="#" className="group">
            <div className="relative">
              <Image
                src="https://ichef.bbci.co.uk/news/640/cpsprodpb/6fb8/live/7f553e50-acd1-11ef-a4fe-a3e9a6c5d640.jpg.webp"
                alt="Israel military"
                width={400}
                height={225}
                className="w-full rounded-sm sm:rounded"
              />
            </div>
            <h3 className="mt-2 sm:mt-3 text-[1.125rem] sm:text-[1.25rem] leading-tight font-bold group-hover:text-[#4A14DC]">
              Israel building new military dividing line across Gaza, satellite images suggest
            </h3>
            <p className="mt-1.5 sm:mt-2 text-[0.875rem] sm:text-[0.9375rem] leading-snug text-[#3F3F42]">
              Satellite images show the IDF has destroyed hundreds of buildings in north Gaza as it creates the divide.
            </p>
            <TimeTag time="31 mins ago" />
          </Link>
        </article>

        {/* Secondary Story */}
        <article className="mt-4 sm:mt-6">
          <Link href="#" className="group">
            <Image
              src="https://ichef.bbci.co.uk/news/640/cpsprodpb/1e2a/live/51066320-ad40-11ef-bdf5-b7cb2fa86e10.jpg.webp"
              alt="Social media"
              width={400}
              height={225}
              className="w-full rounded-sm sm:rounded"
            />
            <h3 className="mt-2 sm:mt-3 text-[1rem] sm:text-[1.125rem] leading-tight font-bold group-hover:text-[#4A14DC]">
              Australian Senate approves social media ban on under-16s
            </h3>
            <p className="mt-1.5 sm:mt-2 text-[0.875rem] sm:text-[0.9375rem] leading-snug text-[#3F3F42]">
              The ban aims to reduce harms on children and will take at least a year to implement, the PM says.
            </p>
            <TimeTag time="4 hrs ago" category="Australia" />
          </Link>
        </article>
      </div>

      {/* Section 2: Middle Column */}
      <div className="lg:col-span-5 mt-4 lg:mt-0">
        <article className="relative">
          <Image
            src="https://ichef.bbci.co.uk/news/640/cpsprodpb/c434/live/a2b4a310-ad79-11ef-8ab9-9192db313061.jpg.webp"
            alt="Putin threatens Kyiv"
            width={600}
            height={400}
            className="w-full rounded-sm sm:rounded"
          />
          <div className="mt-2 sm:mt-3 lg:mt-4">
            <div className="flex items-center space-x-2 mb-1.5 sm:mb-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#BB1919] rounded-full animate-pulse"></div>
              <span className="text-[#BB1919] font-bold text-[0.8125rem] sm:text-sm">LIVE</span>
            </div>
            <Link href="#" className="group">
              <h2 className="text-[1.25rem] sm:text-[1.375rem] lg:text-[1.5rem] leading-tight font-bold group-hover:text-[#4A14DC]">
                Putin threatens to target Kyiv 'decision-making centres' with new missile
              </h2>
              <p className="mt-2 sm:mt-3 text-[0.875rem] sm:text-[0.9375rem] leading-snug text-[#3F3F42]">
                The Russian leader's comments come after Moscow's overnight missile and drone attack on Ukraine's power grid.
              </p>
            </Link>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-[0.875rem] sm:text-[0.9375rem]">
              <li>
                <Link href="#" className="text-[#1B1B1B] hover:text-[#4A14DC]">
                  • Ukraine power grid hit by major Russian drone and missile attack
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#1B1B1B] hover:text-[#4A14DC]">
                  • What has Trump's chosen Ukraine-Russia envoy said about ending the war?
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </div>

      {/* Section 3: Right Column */}
      <div className="lg:col-span-3 mt-4 lg:mt-0">
        <div className="space-y-4 sm:space-y-6">
          {[
            {
              title: "Mark Zuckerberg dines with Donald Trump at Mar-a-Lago",
              description: "Relations appear to have improved markedly from Trump's threat earlier this year to throw the Meta boss in jail.",
              time: "6 hrs ago",
              category: "Technology"
            },
            {
              title: "Masterchef UK's Gregg Wallace steps aside after allegations",
              description: "It comes after BBC News sent a letter outlining allegations by 13 people, including Kirsty Wark, that Wallace made inappropriate sexual comments.",
              time: "1 hr ago",
              category: "Culture"
            },
            {
              title: "Thanksgiving turkeys airdropped to remote Alaska homes",
              description: "Esther Keim started delivering frozen turkeys after one of her neighbours told her squirrel for Thanksgiving did not stretch very far.",
              time: "4 hrs ago",
              category: "US & Canada"
            },
            {
              title: "Colombian navy intercepts narco-subs taking new route to Australia",
              description: "A semi-submersible packed full of cocaine is the latest of a number to be seized in the Pacific Ocean.",
              time: "4 hrs ago",
              category: "World"
            }
          ].map((story, index) => (
            <article key={index}>
              <Link href="#" className="group">
                <h3 className="text-[1rem] sm:text-[1.125rem] leading-tight font-bold group-hover:text-[#4A14DC]">
                  {story.title}
                </h3>
                <p className="mt-1.5 sm:mt-2 text-[0.875rem] sm:text-[0.9375rem] leading-snug text-[#3F3F42]">
                  {story.description}
                </p>
                <TimeTag time={story.time} category={story.category} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
