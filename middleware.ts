import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // If the user goes to ask.amankhannpl.com, rewrite the route to our /ask page internally
  if (hostname.startsWith('ask.')) {
    url.pathname = `/ask${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};