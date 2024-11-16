export function Navbar() {
  const categories = [
    "World",
    "Politics",
    "Business",
    "Health",
    "Entertainment",
    "Style",
    "Travel",
    "Sports",
    "Tech"
  ];

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with logo */}
        <div className="flex justify-center py-4 border-b">
          <h1 className="text-4xl font-bold tracking-tight text-red-600">
            News AI
          </h1>
        </div>
        
        {/* Categories */}
        <div className="overflow-x-auto">
          <div className="flex space-x-8 py-3 px-4">
            {categories.map((category) => (
              <button
                key={category}
                className="text-gray-700 hover:text-red-600 whitespace-nowrap font-medium transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
