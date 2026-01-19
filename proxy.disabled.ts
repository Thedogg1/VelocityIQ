// proxy.ts
// Based on Clerk Next.js Quickstart + clerkMiddleware reference

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Protect only /studio and its subpaths
const isProtectedRoute = createRouteMatcher([
  '/studio(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Only match /studio route and its subpaths - don't interfere with other routes
    '/studio/:path*',
  ],
};
