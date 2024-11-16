import Link from "next/link";

export function Navbar() {
  const categories = [
    "World",
    "Politics",
    "Business",
    "Tech",
    "Sport",
    "Travel",
    "Style",
    "Health",
    "Crypto"
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      {/* Edition bar */}
      <div className="bg-[#0c0c0c] text-white py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-sm">Edition</span>
              <select className="bg-[#0c0c0c] text-sm border-none focus:ring-0">
                <option>U.S.</option>
                <option>International</option>
                <option>Arabic</option>
              </select>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <button className="hover:text-gray-300">Follow</button>
              <button className="hover:text-gray-300">Sign in</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-[#cc0000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <button className="text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold tracking-tight text-white">
                NEWS AI
              </h1>
            </Link>

            <button className="text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <div className="flex space-x-8 py-3 px-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="text-gray-900 hover:text-[#cc0000] whitespace-nowrap font-medium transition-colors duration-200 text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Live TV & Audio Banner */}
      <div className="bg-[#1b386b] text-white py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                LIVE TV
              </span>
              <span>Audio</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Live</span>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded">
                Up Next
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
