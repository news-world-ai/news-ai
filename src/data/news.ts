export interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export interface ArticleNewsItem extends NewsItem {
  articlePath: string;
}

export const breakingNews = {
  id: 1,
  title: "Israel building new military dividing line across Gaza",
  description: "Satellite images show the IDF has destroyed hundreds of buildings in north Gaza as it creates the divide.",
  image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/cbe2/live/5f782100-ad72-11ef-967f-cbb1965d6a73.jpg.webp",
  category: "Middle East",
  date: "2024-02-16"
};

export const cryptoNews: ArticleNewsItem[] = [
  {
    id: 8,
    title: "Bitcoin Surges Past $50,000",
    description: "Bitcoin has reached a significant milestone, surpassing $50,000 as institutional adoption continues to grow. The cryptocurrency market has shown remarkable resilience in recent months.",
    image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/17F47/production/_132701524_gettyimages-1666747176.jpg.webp",
    category: "Cryptocurrency",
    date: "2024-02-16",
    articlePath: "src/data/articles/bitcoin-surge.md"
  },
  {
    id: 9,
    title: "Ethereum 2.0 Update Progress",
    description: "The Ethereum network is preparing for a major upgrade that promises to revolutionize its infrastructure. The highly anticipated Ethereum 2.0 update represents a significant step forward in blockchain technology.",
    image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/14C7B/production/_132701891_greggwallace2.jpg.webp",
    category: "Cryptocurrency",
    date: "2024-02-16",
    articlePath: "src/data/articles/ethereum-update.md"
  },
  {
    id: 10,
    title: "DeFi Market Cap Hits New Record",
    description: "The Decentralized Finance (DeFi) sector has achieved a remarkable milestone as its total market capitalization reaches unprecedented levels. This growth reflects the increasing adoption of DeFi protocols.",
    image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/17B2F/production/_132701889_p0h9c0h1.jpg.webp",
    category: "Cryptocurrency",
    date: "2024-02-16",
    articlePath: "src/data/articles/defi-record.md"
  }
];

export const featuredNews: ArticleNewsItem[] = [
  {
    id: 2,
    title: "Trump's Wild White House Pet: Meet Musk the Mischievous Squirrel",
    description: "Former President Donald Trump introduced a unique addition to the White House - a squirrel named Musk, who became the first-ever presidential squirrel companion.",
    image: "/squirrel.jpeg",
    category: "Politics",
    date: "2024-02-16",
    articlePath: "src/data/articles/trump-musk-squirrel.md"
  }
];

export const latestNews: NewsItem[] = [
  {
    id: 6,
    title: "New Environmental Policy Announced",
    description: "Government unveils ambitious plan to reduce carbon emissions by 2030.",
    image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/13191/production/_132701886_gettyimages-1311206719.jpg.webp",
    category: "Environment",
    date: "2024-02-16"
  },
  {
    id: 7,
    title: "Tech Giants Face New Regulations",
    description: "Major technology companies to comply with stricter data privacy laws.",
    image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/1339E/production/_132701884_gettyimages-1666747176.jpg.webp",
    category: "Technology",
    date: "2024-02-16"
  }
];
