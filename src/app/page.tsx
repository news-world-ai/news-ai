import MainGrids from '@/components/news/MainGrids';
import MoreNews from '@/components/news/MoreNews';
import OnlyFromBBC from '@/components/news/OnlyFromBBC';
import Travel from '@/components/news/Travel';

export default function Home() {
  const moreNewsStories = [
    {
      title: "US and China swap three prisoners each in exchange",
      time: "8 hrs ago",
      category: "World"
    },
    {
      title: "Why Muslims in India are opposing changes to a property law",
      time: "8 hrs ago",
      category: "Asia"
    },
    {
      title: "Chinese companies apologise for 'shrunken' sanitary pads",
      time: "10 hrs ago",
      category: "Asia"
    },
    {
      title: "UK and Iraq strike deal to clamp down on people smuggling gangs",
      time: "28 mins ago",
      category: "Politics"
    },
    {
      title: "K-Pop group NewJeans split from agency in mistreatment row",
      time: "55 mins ago",
      category: "Asia"
    }
  ];

  const bbcStories = [
    {
      title: "Bringing back California's mighty condor",
      description: "For the first time in 100 years, California condors flying over Yurok land, thanks to an intensive reintroduction programme.",
      image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/7914/live/ada1d8e0-ad0d-11ef-bdf5-b7cb2fa86e10.jpg.webp",
      time: "7 hrs ago",
      category: "Future"
    },
    {
      title: "The hard-working origins of the blue-collar jacket",
      description: "How the humble barn jacket, chore coat and donkey jacket all went from functional workwear to \"It-item\". As a trend, is it appropriation – or a homage to history?",
      image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/bcca/live/b6537050-ad82-11ef-bdf5-b7cb2fa86e10.jpg.webp",
      time: "6 hrs ago",
      category: "Culture"
    }
  ];

  const travelStory = {
    title: "How the bullet train transformed Japan",
    description: "Sixty years after the world's first high-speed train launched, rail enthusiast Paul Carter rides the bullet train along what's been dubbed the \"New Golden Route\".",
    image: "https://ichef.bbci.co.uk/images/ic/1920x1080/p0k74n5y.jpg.webp"
  };

  return (
    <div className="bg-white min-h-screen py-6">

      <main className="max-w-[1280px] mx-auto px-4">
        {/* Main News Grid */}
        <MainGrids />

        {/* Only from the BBC */}
        <OnlyFromBBC stories={bbcStories} />

        {/* Travel Section */}
        <Travel story={travelStory} />

        {/* More News Section */}
        <MoreNews stories={moreNewsStories} />
      </main>
    </div>
  );
}
