import Image from "next/image";

const breakingNews = {
  id: 1,
  title: "Bitcoin Surges Past $50,000",
  description: "Cryptocurrency market sees major rally as Bitcoin reaches new heights, driven by institutional adoption and market optimism.",
  image: "https://picsum.photos/1200/600?random=1",
  category: "Crypto",
  date: "2024-02-16"
};

const cryptoPrices = [
  { name: "Bitcoin", symbol: "BTC", price: "$50,234.21", change: "+5.2%" },
  { name: "Ethereum", symbol: "ETH", price: "$2,890.15", change: "+3.8%" },
  { name: "Solana", symbol: "SOL", price: "$98.45", change: "+7.1%" },
  { name: "Cardano", symbol: "ADA", price: "$2.15", change: "+4.3%" }
];

const featuredNews = [
  {
    id: 2,
    title: "Ethereum 2.0 Upgrade Nears Completion",
    description: "Major blockchain upgrade promises improved scalability and reduced energy consumption.",
    image: "https://picsum.photos/800/400?random=2",
    category: "Crypto",
    date: "2024-02-16"
  },
  {
    id: 3,
    title: "Central Banks Explore Digital Currencies",
    description: "Major economies accelerate development of central bank digital currencies (CBDCs).",
    image: "https://picsum.photos/800/400?random=3",
    category: "Finance",
    date: "2024-02-16"
  },
  {
    id: 4,
    title: "NFT Market Shows Signs of Recovery",
    description: "Digital art and collectibles see renewed interest as market sentiment improves.",
    image: "https://picsum.photos/800/400?random=4",
    category: "Crypto",
    date: "2024-02-16"
  }
];

const latestCryptoNews = [
  {
    id: 5,
    title: "DeFi Protocol Reports Record TVL",
    description: "Decentralized finance platform reaches $10 billion in total value locked.",
    image: "https://picsum.photos/800/400?random=5",
    category: "DeFi",
    date: "2024-02-16"
  },
  {
    id: 6,
    title: "Major Bank Launches Crypto Trading",
    description: "Global financial institution expands services to include cryptocurrency trading.",
    image: "https://picsum.photos/800/400?random=6",
    category: "Finance",
    date: "2024-02-16"
  }
];

const categories = [
  { name: "Crypto", active: true },
  { name: "Markets", active: false },
  { name: "DeFi", active: false },
  { name: "NFTs", active: false },
  { name: "Technology", active: false },
  { name: "Regulation", active: false }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Crypto Price Ticker */}
      <div className="bg-black text-white py-2 overflow-hidden">
        <div className="flex animate-scroll">
          {cryptoPrices.map((crypto) => (
            <div key={crypto.symbol} className="flex items-center space-x-2 mx-4">
              <span className="font-bold">{crypto.symbol}</span>
              <span>{crypto.price}</span>
              <span className={crypto.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                {crypto.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Categories */}
      <div className="bg-gray-800 text-white py-2 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`text-sm whitespace-nowrap py-2 px-1 border-b-2 transition-colors duration-200 ${
                  category.active
                    ? 'border-red-600 text-white'
                    : 'border-transparent text-gray-300 hover:text-white hover:border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breaking News */}
        <div className="mb-12">
          <div className="relative h-[500px] rounded-lg overflow-hidden group">
            <Image
              src={breakingNews.image}
              alt={breakingNews.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-md animate-pulse">
                    Breaking News
                  </span>
                  <span className="text-gray-300 text-sm">{breakingNews.date}</span>
                </div>
                <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                  {breakingNews.title}
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl">
                  {breakingNews.description}
                </p>
                <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Market Overview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-1 h-8 bg-blue-600 mr-3"></span>
            Market Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {cryptoPrices.map((crypto) => (
              <div key={crypto.symbol} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{crypto.name}</span>
                  <span className={`text-sm ${crypto.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {crypto.change}
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-bold text-gray-900">{crypto.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredNews.map((news) => (
            <div key={news.id} className="news-card group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`category-badge category-${news.category.toLowerCase()}`}>
                    {news.category}
                  </span>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 news-title">
                  {news.title}
                </h2>
                <p className="text-gray-600 mb-4">{news.description}</p>
                <button className="text-red-600 hover:text-red-800 font-semibold transition-colors duration-200">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Latest Crypto News */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-1 h-8 bg-green-600 mr-3"></span>
            Latest in Crypto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestCryptoNews.map((news) => (
              <div key={news.id} className="flex gap-4 group cursor-pointer">
                <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <span className={`category-badge category-${news.category.toLowerCase()}`}>
                    {news.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2 group-hover:text-red-600 transition-colors duration-200">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{news.description}</p>
                  <span className="text-sm text-gray-500 mt-2 block">{news.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
