import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export const dynamic = 'force-static';

export { metadata, viewport } from 'next-sanity/studio';

/**
 * ⚠️ Security Warning
 * 
 * The Sanity Studio route (/studio) is protected by Clerk authentication.
 * 
 * See docs/BLOG_ENVIRONMENT_SETUP_PRODUCTION.md for details.
 */
export default function StudioPage() {
  return <NextStudio config={config} />;
}
