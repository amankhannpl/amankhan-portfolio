import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Eğer istek ask. subdomainine geldiyse, arka planda /ask sayfasına eşle
  if (hostname.startsWith('ask.')) {
    url.pathname = `/ask${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};