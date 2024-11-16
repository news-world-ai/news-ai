export function Footer() {
  const sections = [
    {
      title: "World",
      links: ["Africa", "Americas", "Asia", "Australia", "Europe", "Middle East"]
    },
    {
      title: "Politics",
      links: ["Congress", "Supreme Court", "Facts First", "Elections"]
    },
    {
      title: "Business",
      links: ["Markets", "Tech", "Media", "Success", "Perspectives"]
    },
    {
      title: "Entertainment",
      links: ["Movies", "Television", "Celebrity", "Arts"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <button className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-white mb-4 md:mb-0">
              News AI
            </div>
            <div className="flex space-x-6">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Use
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Settings
              </button>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-400">
            © 2024 News AI. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
