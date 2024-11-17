import CryptoNews from "@/components/news/CryptoNews";
import { cryptoNews } from "@/data/news";

export default function CryptoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CryptoNews news={cryptoNews} />
      </main>
    </div>
  );
}
