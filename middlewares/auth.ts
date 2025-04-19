import { NextRequest, NextResponse } from 'next/server';

export function adminMiddleware(req: NextRequest) {
  const token = req.cookies.get('next-auth.session-token') || req.cookies.get('__Secure-next-auth.session-token');

  // This is a placeholder check. In a real app, verify the token and user role properly.
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // For demo, allow access. Implement role check in real app.
  return NextResponse.next();
}
