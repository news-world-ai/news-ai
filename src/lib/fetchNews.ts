import axios from 'axios';
import * as cheerio from 'cheerio';

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export interface NewsData {
  mainStory: NewsItem;
  featuredNews: NewsItem[];
  latestNews: NewsItem[];
}

export async function fetchBBCNews(): Promise<NewsData> {
  try {
    const response = await axios.get('https://www.bbc.com/news');
    const $ = cheerio.load(response.data);
    
    const mainStory: NewsItem = {
      id: 1,
      title: $('.gs-c-promo-heading__title').first().text().trim(),
      description: $('.gs-c-promo-summary').first().text().trim(),
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=450&fit=crop",
      category: $('.gs-c-section-link').first().text().trim() || 'News',
      date: new Date().toISOString(),
    };

    const featuredNews: NewsItem[] = [];
    $('.gs-c-promo--top').slice(1, 4).each(function(i) {
      featuredNews.push({
        id: i + 2,
        title: $(this).find('.gs-c-promo-heading__title').text().trim(),
        description: $(this).find('.gs-c-promo-summary').text().trim(),
        image: `https://images.unsplash.com/photo-${i + 1}?w=400&h=225&fit=crop`,
        category: $(this).find('.gs-c-section-link').text().trim() || 'News',
        date: new Date().toISOString(),
      });
    });

    const latestNews: NewsItem[] = [];
    $('.gs-c-promo--regular').slice(0, 2).each(function(i) {
      latestNews.push({
        id: i + 5,
        title: $(this).find('.gs-c-promo-heading__title').text().trim(),
        description: $(this).find('.gs-c-promo-summary').text().trim(),
        image: `https://images.unsplash.com/photo-${i + 4}?w=400&h=225&fit=crop`,
        category: $(this).find('.gs-c-section-link').text().trim() || 'News',
        date: new Date().toISOString(),
      });
    });

    return {
      mainStory,
      featuredNews,
      latestNews,
    };
  } catch (error) {
    console.error('Error fetching BBC news:', error);
    // Return fallback data if fetch fails
    return {
      mainStory: {
        id: 1,
        title: "Israel building new military dividing line across Gaza",
        description: "Satellite images show the IDF has destroyed hundreds of buildings in north Gaza as it creates the divide.",
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=450&fit=crop",
        category: "Middle East",
        date: new Date().toISOString()
      },
      featuredNews: [
        {
          id: 2,
          title: "Mark Zuckerberg dines with Donald Trump at Mar-a-Lago",
          description: "Relations appear to have improved markedly from Trump's threat earlier this year.",
          image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop",
          category: "Technology",
          date: new Date().toISOString()
        },
        {
          id: 3,
          title: "Masterchef UK's Gregg Wallace steps aside after allegations",
          description: "It comes after BBC News sent a letter outlining allegations by 13 people.",
          image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=225&fit=crop",
          category: "Culture",
          date: new Date().toISOString()
        },
        {
          id: 4,
          title: "Thanksgiving turkeys airdropped to remote Alaska homes",
          description: "Esther Keim started delivering frozen turkeys after one of her neighbours told her squirrel for Thanksgiving did not stretch very far.",
          image: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=400&h=225&fit=crop",
          category: "US & Canada",
          date: new Date().toISOString()
        }
      ],
      latestNews: [
        {
          id: 5,
          title: "Colombian navy intercepts narco-subs taking new route",
          description: "A semi-submersible packed full of cocaine is the latest of a number to be seized in the Pacific Ocean.",
          image: "https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?w=400&h=225&fit=crop",
          category: "World",
          date: new Date().toISOString()
        },
        {
          id: 6,
          title: "First new asthma attack treatment in 50 years",
          description: "Around two million asthma and COPD attacks each year could be treated with the drug.",
          image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=225&fit=crop",
          category: "Health",
          date: new Date().toISOString()
        }
      ]
    };
  }
}
