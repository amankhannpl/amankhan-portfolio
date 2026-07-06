import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const targetUrl = 'https://meet-aman-portfolio.streamlit.app';
  
  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': request.headers.get('user-agent') || '',
        'Accept': request.headers.get('accept') || '',
      },
    });

    const data = await response.text();
    
    return new NextResponse(data, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
        // Clear restrictive frame blocking headers safely
        'X-Frame-Options': 'ALLOWALL',
        'Content-Security-Policy': "frame-ancestors 'self' https://*.amankhannpl.com",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to proxy chatbot stream' }, { status: 500 });
  }
}