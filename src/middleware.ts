"use server";

import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth_token');
  const { pathname } = req.nextUrl;

  // Protect dashboard routes
  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }

  // Protect auth routes
  // if (pathname.startsWith('/auth') && token) {
  //   return NextResponse.redirect(new URL('/', req.url));
  // }

  // Redirect logged-in users away from auth pages
  if (pathname.startsWith('/auth') && token) {
    const referer = req.headers.get('referer') || '/';
    return NextResponse.redirect(new URL(referer, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth'],
};
