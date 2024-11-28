import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const footerLinks = [
    { name: "Home", href: "/home" },
    { name: "News", href: "/news" },
    { name: "Sport", href: "/sport" },
    { name: "Business", href: "/business" },
    { name: "Innovation", href: "/innovation" },
    { name: "Culture", href: "/culture" },
    { name: "Arts", href: "/arts" },
    { name: "Travel", href: "/travel" },
    { name: "Earth", href: "/earth" },
    { name: "Video", href: "/video" },
    { name: "Live", href: "/live" },
    { name: "Audio", href: "https://www.bbc.co.uk/sounds" },
    { name: "Weather", href: "https://www.bbc.com/weather" },
    { name: "BBC Shop", href: "/shop" }
  ];

  const legalLinks = [
    { name: "Terms of Use", href: "#" },
    { name: "About the NEWZ", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Accessibility Help", href: "#" },
    { name: "Contact the NEWZ", href: "#" },
    { name: "Advertise with us", href: "#" },
    { name: "Do not share or sell my info", href: "#" },
    { name: "Contact technical support", href: "#" }
  ];

  return (
    <footer className="bg-white border-t border-[#E6E6E6] mt-12">
      <div className="max-w-[1280px] mx-auto px-4 py-6 lg:py-8">
        {/* BBC Logo */}
        <div className="mb-6 lg:mb-8">
          <div className="flex space-x-[1px]">
            <div className="bg-black text-white w-7 h-7 flex items-center justify-center text-[1rem] font-bold">N</div>
            <div className="bg-black text-white w-7 h-7 flex items-center justify-center text-[1rem] font-bold">E</div>
            <div className="bg-black text-white w-7 h-7 flex items-center justify-center text-[1rem] font-bold">W</div>
            <div className="bg-black text-white w-7 h-7 flex items-center justify-center text-[1rem] font-bold">Z</div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mb-6 lg:mb-8">
          <ul className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-x-6 gap-y-4 lg:gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-[1rem] lg:text-[0.875rem] text-[#1B1B1B] hover:text-[#4A14DC] block py-1 lg:py-0"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Selector */}
        <div className="mb-6 lg:mb-8">
          <button className="bg-[#F6F6F6] w-full lg:w-auto text-[0.9375rem] px-4 py-3 flex items-center justify-between lg:justify-start lg:space-x-2">
            <span>NEWZ in other languages</span>
            <svg className="w-4 h-4 lg:ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Social Media */}
        <div className="mb-6 lg:mb-8">
          <h2 className="text-[0.9375rem] mb-3">Follow NEWZ on:</h2>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-[#1B1B1B] hover:text-[#4A14DC]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link href="#" className="text-[#1B1B1B] hover:text-[#4A14DC]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </Link>
            <Link href="#" className="text-[#1B1B1B] hover:text-[#4A14DC]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
              </svg>
            </Link>
            <Link href="#" className="text-[#1B1B1B] hover:text-[#4A14DC]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Legal Links */}
        <nav className="mb-6 lg:mb-8">
          <ul className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-x-6 gap-y-4 lg:gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-[0.875rem] lg:text-[0.8125rem] text-[#1B1B1B] hover:text-[#4A14DC] block py-1 lg:py-0"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="text-[0.875rem] lg:text-[0.8125rem] text-[#6E6E73] space-y-2">
          <p>Copyright © 2024 NEWZ. All rights reserved. <span className="italic">The NEWZ is not responsible for the content of external sites.</span></p>
          <Link href="#" className="text-[#1B1B1B] hover:text-[#4A14DC] block">
            Read about our approach to external linking.
          </Link>
        </div>
      </div>
    </footer>
  );
}
