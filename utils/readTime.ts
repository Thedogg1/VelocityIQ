import { Block } from '@/typings';

/**
 * Calculates the estimated reading time for a blog post based on its content blocks.
 * Assumes average reading speed of 200 words per minute.
 * 
 * @param blocks - Array of PortableText blocks from the post body
 * @returns Estimated reading time in minutes (rounded to nearest integer)
 */
export function calculateReadTime(blocks: Block[]): number {
  if (!blocks || blocks.length === 0) {
    return 0;
  }

  let wordCount = 0;

  blocks.forEach((block) => {
    if (block._type === 'block' && block.children) {
      block.children.forEach((child) => {
        if (child._type === 'span' && child.text) {
          const words = child.text.trim().split(/\s+/).filter((word) => word.length > 0);
          wordCount += words.length;
        }
      });
    }
  });

  const wordsPerMinute = 200;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime > 0 ? readingTime : 1;
}
