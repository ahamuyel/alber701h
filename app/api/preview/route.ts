import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false`
    );

    if (!response.ok) {
      return NextResponse.json({ error: 'Preview service unavailable' }, { status: 502 });
    }

    const data = await response.json();
    const screenshotUrl = data?.data?.screenshot?.url;

    if (!screenshotUrl) {
      return NextResponse.json({ error: 'No screenshot available' }, { status: 404 });
    }

    const imgResponse = await fetch(screenshotUrl);

    if (!imgResponse.ok) {
      return NextResponse.json({ error: 'Failed to fetch screenshot' }, { status: 502 });
    }

    return new NextResponse(imgResponse.body, {
      headers: {
        'Content-Type': imgResponse.headers.get('Content-Type') || 'image/jpeg',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
