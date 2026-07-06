import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Capture anyone hitting your AI subdomain
  if (hostname.startsWith('ask.')) {
    // Invisibly reverse-proxy to your live Streamlit container
    return NextResponse.rewrite(new URL('https://meet-aman-portfolio.streamlit.app' + url.pathname + url.search));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};