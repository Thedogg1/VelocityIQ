export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-27';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

// Token is optional - not required for public blog reading
// Per Sanity best practice: No token needed for static/public content
// 
// Token only needed for:
// - Studio (client-side): NEXT_PUBLIC_SANITY_TOKEN (read-only token, secure /studio route)
// - Comments API (server-side): SANITY_API_READ_TOKEN or SANITY_API_WRITE_TOKEN
//
// Note: Studio runs client-side, so it requires NEXT_PUBLIC_ prefix
// This is acceptable IF the /studio route is secured (password protection/auth)
export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_API_READ_TOKEN;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}
