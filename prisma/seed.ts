import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.article.deleteMany()

  // Breaking news
  await prisma.article.create({
    data: {
      title: "AI Breakthrough in Climate Research",
      description: "Scientists use artificial intelligence to predict weather patterns with unprecedented accuracy, marking a significant advancement in climate science.",
      content: "Scientists use artificial intelligence to predict weather patterns with unprecedented accuracy, marking a significant advancement in climate science.",
      image: "https://picsum.photos/1200/600?random=1",
      category: "Technology",
      type: "breaking",
      date: new Date("2024-02-16")
    }
  })

  // Featured news with Trump-Musk article
  await prisma.article.create({
    data: {
      title: "Trump's Wild White House Pet: Meet Musk the Mischievous Squirrel",
      description: "Former President Donald Trump introduced a unique addition to the White House - a squirrel named Musk, who became the first-ever presidential squirrel companion.",
      content: fs.readFileSync(path.join(process.cwd(), 'src/data/articles/trump-musk-squirrel.md'), 'utf-8'),
      image: "/squirrel.jpeg",
      category: "Politics",
      type: "featured",
      date: new Date("2024-02-16")
    }
  })

  // Crypto news articles
  await prisma.article.create({
    data: {
      title: "Bitcoin Surges Past $50,000",
      description: "Bitcoin has reached a significant milestone, surpassing $50,000 as institutional adoption continues to grow. The cryptocurrency market has shown remarkable resilience in recent months.",
      content: fs.readFileSync(path.join(process.cwd(), 'src/data/articles/bitcoin-surge.md'), 'utf-8'),
      image: "https://picsum.photos/800/400?random=7",
      category: "Cryptocurrency",
      type: "crypto",
      date: new Date("2024-02-16")
    }
  })

  await prisma.article.create({
    data: {
      title: "Ethereum 2.0 Update Progress",
      description: "The Ethereum network is preparing for a major upgrade that promises to revolutionize its infrastructure. The highly anticipated Ethereum 2.0 update represents a significant step forward in blockchain technology.",
      content: fs.readFileSync(path.join(process.cwd(), 'src/data/articles/ethereum-update.md'), 'utf-8'),
      image: "https://picsum.photos/800/400?random=8",
      category: "Cryptocurrency",
      type: "crypto",
      date: new Date("2024-02-16")
    }
  })

  await prisma.article.create({
    data: {
      title: "DeFi Market Cap Hits New Record",
      description: "The Decentralized Finance (DeFi) sector has achieved a remarkable milestone as its total market capitalization reaches unprecedented levels. This growth reflects the increasing adoption of DeFi protocols.",
      content: fs.readFileSync(path.join(process.cwd(), 'src/data/articles/defi-record.md'), 'utf-8'),
      image: "https://picsum.photos/800/400?random=9",
      category: "Cryptocurrency",
      type: "crypto",
      date: new Date("2024-02-16")
    }
  })

  // Latest news
  await prisma.article.create({
    data: {
      title: "New Environmental Policy Announced",
      description: "Government unveils ambitious plan to reduce carbon emissions by 2030.",
      content: "Government unveils ambitious plan to reduce carbon emissions by 2030.",
      image: "https://picsum.photos/800/400?random=5",
      category: "Environment",
      type: "latest",
      date: new Date("2024-02-16"),
      externalLink: "https://edition.cnn.com/"
    }
  })

  await prisma.article.create({
    data: {
      title: "Tech Giants Face New Regulations",
      description: "Major technology companies to comply with stricter data privacy laws.",
      content: "Major technology companies to comply with stricter data privacy laws.",
      image: "https://picsum.photos/800/400?random=6",
      category: "Technology",
      type: "latest",
      date: new Date("2024-02-16"),
      externalLink: "https://edition.cnn.com/"
    }
  })

  console.log('Database has been seeded!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
