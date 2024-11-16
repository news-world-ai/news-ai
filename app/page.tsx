import { BreakingNews } from "./components/BreakingNews";
import { FeaturedNews } from "./components/FeaturedNews";
import { LatestNews } from "./components/LatestNews";
import { breakingNews, featuredNews, latestNews } from "./data/news";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Top stories section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Main story */}
          <div className="lg:col-span-3">
            <BreakingNews
              title={breakingNews.title}
              description={breakingNews.description}
              image={breakingNews.image}
              date={breakingNews.date}
            />
          </div>
          
          {/* Side headlines */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b pb-2">Top Stories</h2>
            {featuredNews.slice(0, 5).map((item) => (
              <div key={item.id} className="border-b pb-3 last:border-b-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-red-600">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-sm font-semibold hover:text-red-600 transition-colors duration-200 cursor-pointer">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Featured stories grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Featured Stories</h2>
          <FeaturedNews news={featuredNews} />
        </div>

        {/* Latest news section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2">Latest News</h2>
            <LatestNews news={latestNews} />
          </div>
          
          {/* Side section */}
          <div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-4 border-b pb-2">More Headlines</h3>
              {latestNews.slice(-3).map((item) => (
                <div key={item.id} className="mb-4 last:mb-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-red-600">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold hover:text-red-600 transition-colors duration-200 cursor-pointer">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
