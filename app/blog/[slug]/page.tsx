import React from 'react';
import { groq, PortableText } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { RichText } from '@/components/blog/RichText';
import { calculateReadTime } from '@/utils/readTime';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Post } from '@/typings';

const query = groq`
  *[_type == "post" && slug.current == $slug][0]{
    ...,
    categories[]->,
    'comments': *[_type == 'comment' &&
      post._ref == ^._id && approved == true],
  }
`;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  if (!slug) {
    throw new Error('Slug parameter is required');
  }

  const post: Post = await client.fetch(query, { slug }, {
    next: { revalidate: 10 },
  });

  if (!post) {
    return (
      <>
        <Header />
        <main className='bg-[var(--color-surface)] min-h-screen'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16'>
            <h1 className='text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-4'>
              Post not found
            </h1>
            <p className='text-[var(--color-text-secondary)]'>
              The blog post you are looking for does not exist.
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const readTime = calculateReadTime(post.body);

  return (
    <>
      <Header />
      <main className='bg-[var(--color-surface)] min-h-screen'>
        {/* Hero Image */}
        {post.mainImage && (
          <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden'>
            <Image
              src={urlForImage(post.mainImage)}
              alt={post.mainImage.alt ? post.mainImage.alt : post.title}
              fill
              className='object-cover'
              priority
            />
          </div>
        )}

        {/* Content Container */}
        <div className='max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16'>
          {/* Article Header */}
          <article>
            <header className='mb-8 sm:mb-12'>
              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className='flex flex-wrap gap-2 mb-4'>
                  {post.categories.map((category) => (
                    <span 
                      key={category._id}
                      className='text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 sm:py-1.5 bg-[var(--color-primary)] text-white rounded-full'
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4 sm:mb-6 leading-tight'>
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className='flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[var(--color-text-secondary)] mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-[var(--color-border-subtle)]'>
                <span>By {post.authorName}</span>
                <span className='hidden sm:inline'>•</span>
                <time>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
                <span className='hidden sm:inline'>•</span>
                <span>{readTime} min read</span>
              </div>
            </header>

            {/* Article Body */}
            <div className='prose prose-lg max-w-none'>
              <PortableText value={post.body} components={RichText} />
            </div>

            {/* CTA Section */}
            <div className='mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-[var(--color-border-subtle)]'>
              <div className='bg-white rounded-lg p-6 sm:p-8 text-center shadow-[var(--shadow-card)]'>
                <h3 className='text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-3 sm:mb-4'>
                  Ready to see VelocityIQ in action?
                </h3>
                <p className='text-sm sm:text-base text-[var(--color-text-secondary)] mb-4 sm:mb-6 max-w-2xl mx-auto'>
                  Book a demo to see how our AI-powered compliance tools can streamline your RIA operations.
                </p>
                <Link
                  href='/book'
                  className='inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-cta-hover)] transition-colors font-semibold text-sm sm:text-base'
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
