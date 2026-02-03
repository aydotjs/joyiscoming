import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // If user visits root path, redirect to /web
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/web', request.url))
  }
}

export const config = {
  matcher: '/',
}