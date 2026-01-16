import { createImageUrlBuilder } from '@sanity/image-url';

import { dataset, projectId } from '../env';
import type { Image as SanityImage } from '@/typings';

if (!projectId) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
}

if (!dataset) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
}

const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
});

export const urlForImage = (source: SanityImage) => {
  if (!source) {
    throw new Error('Image source is required');
  }
  
  if (!imageBuilder) {
    throw new Error('Image builder is not initialized');
  }
  
  const url = imageBuilder.image(source).auto('format').fit('max').url();
  
  if (!url) {
    throw new Error('Failed to generate image URL');
  }
  
  return url;
};
