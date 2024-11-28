import Link from 'next/link';

interface LiveUpdateProps {
  title: string;
  description: string;
  bulletPoints: string[];
}

export default function LiveUpdate({ title, description, bulletPoints }: LiveUpdateProps) {
  return (
    <div className="border-l-[4px] border-[#BB1919] pl-3 sm:pl-4 mx-2 sm:mx-4 lg:mx-0">
      <div className="flex items-center space-x-2 mb-2 sm:mb-3 lg:mb-4">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#BB1919] rounded-full animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
        <span className="text-[#BB1919] font-bold text-[0.8125rem] sm:text-[0.875rem] tracking-wide">LIVE</span>
      </div>
      <article>
        <Link href="#" className="block group">
          <h2 className="text-[1.125rem] sm:text-[1.25rem] leading-[1.375rem] sm:leading-[1.5rem] font-bold text-[#1B1B1B] group-hover:text-[#4A14DC]">
            {title}
          </h2>
          <p className="mt-2 sm:mt-2.5 lg:mt-3 text-[0.875rem] sm:text-[0.9375rem] leading-[1.25rem] sm:leading-[1.375rem] text-[#3F3F42]">
            {description}
          </p>
        </Link>
        <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <Link 
                href="#" 
                className="text-[0.875rem] sm:text-[0.9375rem] leading-[1.25rem] sm:leading-[1.375rem] text-[#1B1B1B] hover:text-[#4A14DC] group"
              >
                <span className="inline-block mr-1.5 sm:mr-2 text-[#BB1919] font-bold">•</span>
                <span className="group-hover:underline">{point}</span>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
