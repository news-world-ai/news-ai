import { NextResponse } from 'next/server';
import { fetchBBCNews } from '@/lib/fetchNews';

export async function GET() {
  try {
    const news = await fetchBBCNews();
    return NextResponse.json(news);
  } catch (error) {
    console.error('Error in news API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}

// Revalidate every minute
export const revalidate = 60;
