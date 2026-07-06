import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Check if someone is trying to access the ask subdomain
  if (hostname.startsWith('ask.')) {
    return NextResponse.redirect(new URL('https://meet-aman-portfolio.streamlit.app' + url.pathname + url.search));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};