import BreakingNews from "@/components/news/BreakingNews";
import FeaturedNews from "@/components/news/FeaturedNews";
import LatestNews from "@/components/news/LatestNews";
import CryptoNews from "@/components/news/CryptoNews";
import { 
  breakingNews, 
  featuredNews, 
  latestNews, 
  cryptoNews 
} from "@/data/news";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <BreakingNews news={breakingNews} />
        </div>

        <div className="mb-12">
          <FeaturedNews news={featuredNews} />
        </div>

        <CryptoNews news={cryptoNews} />

        <LatestNews news={latestNews} />
      </main>
    </div>
  );
}
