import Image from 'next/image';
import Link from 'next/link';
import { cryptoNews, featuredNews } from '@/data/news';

function TimeTag({ time, category }: { time: string; category?: string }) {
  return (
    <div className="flex items-center text-[13px] text-[#6E6E73] mt-2">
      <span>{time}</span>
      {category && (
        <>
          <span className="mx-2">|</span>
          <span>{category}</span>
        </>
      )}
    </div>
  );
}

export default function CryptoPage() {
  const mainStory = featuredNews[0]; // Trump-Musk story

  return (
    <div className="bg-white min-h-screen">
      {/* CRYPTO Header */}
      <div className="border-b border-[#E6E6E6]">
        <div className="max-w-[1280px] mx-auto px-4">
          <h1 className="text-[2.75rem] font-bold text-[#BB1919] py-4">CRYPTO</h1>
        </div>
      </div>

      <main className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-12 gap-8 py-8">
          {/* Main Story */}
          <div className="col-span-12 lg:col-span-8">
            <Link href={`/crypto/${mainStory.id}`} className="group">
              <Image
                src={mainStory.image}
                alt={mainStory.title}
                width={800}
                height={450}
                className="w-full"
                priority
              />
              <div className="mt-4">
                <h2 className="text-3xl font-bold mb-3 group-hover:text-[#4A14DC]">
                  {mainStory.title}
                </h2>
                <p className="text-[1.125rem] text-[#3F3F42] mb-4">
                  {mainStory.description}
                </p>
                <TimeTag time={mainStory.date} category={mainStory.category} />
              </div>
            </Link>
          </div>

          {/* Right Column - Latest Updates */}
          <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0">
            <div className="border-l-4 border-red-600 pl-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-[#BB1919] rounded-full animate-pulse"></div>
                <span className="text-[#BB1919] font-bold text-sm">LIVE</span>
              </div>
              <h2 className="text-xl font-bold mb-3">Crypto Market Updates</h2>
              <ul className="space-y-4 text-[0.9375rem]">
                {cryptoNews.map((story) => (
                  <li key={story.id}>
                    <Link 
                      href={`/crypto/${story.id}`} 
                      className="text-[#1B1B1B] hover:text-[#4A14DC]"
                    >
                      • {story.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Secondary Stories */}
          <div className="col-span-12 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cryptoNews.slice(0, 3).map((story) => (
                <div key={story.id} className="bg-white group">
                  <Link href={`/crypto/${story.id}`}>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#4A14DC]">
                      {story.title}
                    </h3>
                    <p className="text-[0.9375rem] text-[#3F3F42] mb-2">
                      {story.description}
                    </p>
                    <TimeTag time={story.date} category={story.category} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
