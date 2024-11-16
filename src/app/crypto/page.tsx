import CryptoNews from "@/components/news/CryptoNews";

export default function CryptoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Cryptocurrency News
        </h1>
        <CryptoNews />
      </main>
    </div>
  );
}
