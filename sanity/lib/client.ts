import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, token } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  // Token is optional - only needed for write operations or Studio
  ...(token && { token }),
});
