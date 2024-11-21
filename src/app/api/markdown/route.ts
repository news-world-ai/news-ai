import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filePath = searchParams.get('path');

  if (!filePath) {
    return NextResponse.json({ error: 'No path provided' }, { status: 400 });
  }

  try {
    // Ensure the path is within the src/data directory
    const relativePath = filePath.replace(/^src\/data\//, '');
    const fullPath = path.join(process.cwd(), 'src', 'data', relativePath);

    // Security check to prevent directory traversal
    const normalizedPath = path.normalize(fullPath);
    if (!normalizedPath.startsWith(path.join(process.cwd(), 'src', 'data'))) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 403 });
    }

    const content = await fs.readFile(fullPath, 'utf8');
    
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/markdown',
        // Add CORS headers
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return NextResponse.json(
      { error: 'Failed to read file', details: (error as Error).message },
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
