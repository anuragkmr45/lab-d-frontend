// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth_token'); // Retrieve token from cookies
  const { pathname } = req.nextUrl;

  // Protect dashboard routes
  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  // Redirect logged-in users away from auth pages
  if ((pathname.startsWith('/auth') || pathname.startsWith('/auth')) && token) {
    const referer = req.headers.get('referer') || '/'; // Default redirect to /dashboard
    return NextResponse.redirect(new URL(referer, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth'], // Define protected paths
};
