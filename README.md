# News AI Platform

A modern news watching platform built with Next.js 15, enabling users to discover, watch, and interact with news content in real-time.

## Features

- 🎯 **Personalized News Feed**: Customized news content based on user preferences
- 🔍 **Advanced Search**: Search news by keywords, categories, and sources
- 📱 **Responsive Design**: Seamless experience across all devices
- 🌐 **Real-time Updates**: Live news updates and notifications
- 🎨 **Modern UI**: Built with shadcn components for a sleek user interface
- 🔒 **Secure Authentication**: User authentication and authorization
- 💾 **Data Persistence**: Reliable data storage with Prisma ORM
- ⚡ **Fast API**: High-performance API built with Hono

## Tech Stack

- **Frontend**:
  - Next.js 15 (React Framework)
  - shadcn (UI Components)
  - TailwindCSS (Styling)
  - TypeScript

- **Backend**:
  - Hono (API Framework)
  - Prisma (Database ORM)
  - PostgreSQL (Database)

## Prerequisites

- Node.js 18.17 or later
- PostgreSQL database
- npm or yarn package manager

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/news-ai.git
   cd news-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your environment variables in the `.env` file

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
news-ai/
├── app/                 # Next.js app directory
├── components/          # React components
├── lib/                # Utility functions and shared logic
├── prisma/             # Database schema and migrations
├── public/             # Static assets
├── styles/             # Global styles
├── types/              # TypeScript type definitions
└── api/                # Hono API routes
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
