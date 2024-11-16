import { BreakingNews } from "./components/BreakingNews";
import { FeaturedNews } from "./components/FeaturedNews";
import { LatestNews } from "./components/LatestNews";
import { breakingNews, featuredNews, latestNews } from "./data/news";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Top stories section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Main story */}
          <div className="lg:col-span-8">
            <BreakingNews
              id={breakingNews.id}
              title={breakingNews.title}
              description={breakingNews.description}
              image={breakingNews.image}
              date={breakingNews.date}
            />
          </div>
          
          {/* Side headlines */}
          <div className="lg:col-span-4 bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-[#1b386b] mb-4">Latest Headlines</h2>
            <div className="space-y-4">
              {featuredNews.slice(0, 5).map((item) => (
                <Link href={`/news/${item.id}`} key={item.id}>
                  <div className="border-b pb-3 last:border-b-0 group">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-[#cc0000]">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold group-hover:text-[#cc0000] transition-colors duration-200">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Featured stories grid */}
        <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#1b386b]">Featured Stories</h2>
            <Link href="#" className="text-[#cc0000] text-sm font-semibold hover:underline">
              See all
            </Link>
          </div>
          <FeaturedNews news={featuredNews} />
        </div>

        {/* Latest news section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#1b386b]">Latest News</h2>
                <Link href="#" className="text-[#cc0000] text-sm font-semibold hover:underline">
                  See all
                </Link>
              </div>
              <LatestNews news={latestNews} />
            </div>
          </div>
          
          {/* Side section */}
          <div className="lg:col-span-4">
            <div className="bg-white p-4 rounded-lg shadow-sm sticky top-[200px]">
              <h3 className="text-lg font-bold text-[#1b386b] mb-4">Trending Now</h3>
              {latestNews.slice(-3).map((item) => (
                <Link href={`/news/${item.id}`} key={item.id}>
                  <div className="mb-4 last:mb-0 group">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-[#cc0000]">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold group-hover:text-[#cc0000] transition-colors duration-200">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>

            {/* Ad Space Placeholder */}
            <div className="mt-6 bg-gray-100 p-4 rounded-lg text-center text-gray-500 text-sm">
              Advertisement
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
