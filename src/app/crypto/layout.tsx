import Link from "next/link";

export default function CryptoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/" 
              className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              News AI
            </Link>
            <nav>
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Back to Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            © 2024 News AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
