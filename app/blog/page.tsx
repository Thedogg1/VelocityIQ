import React from 'react';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';
import { calculateReadTime } from '@/utils/readTime';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Post } from '@/typings';

const query = groq`
  *[_type == "post"]{
    ...,
    categories[]->,
  } | order(publishedAt desc)
`;

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(query);

  return (
    <>
      <Header />
      <main className='bg-[var(--color-surface)] min-h-screen'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16'>
          {/* Header Section */}
          <div className='mb-12 sm:mb-16 text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4'>
              VelocityIQ Blog
            </h1>
            <p className='text-base sm:text-lg text-[var(--color-text-secondary)]'>
              AI, risk and compliance for RIA platforms
            </p>
          </div>

          {/* Posts Grid */}
          {!posts || posts.length === 0 ? (
            <div className='text-center py-16'>
              <p className='text-[var(--color-text-secondary)]'>No posts found.</p>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
              {posts.map((post) => {
                const readTime = calculateReadTime(post.body);
                
                if (!post.slug?.current) {
                  return null;
                }

                return (
                  <Link 
                    key={post._id} 
                    href={`/blog/${post.slug.current}`}
                    className='group'
                  >
                    <article className='bg-white rounded-lg shadow-[var(--shadow-card)] overflow-hidden hover:shadow-[var(--shadow-overlay)] transition-shadow duration-200 h-full flex flex-col'>
                      {/* Image */}
                      {post.mainImage && (
                        <div className='relative w-full h-48 overflow-hidden'>
                          <Image
                            src={urlForImage(post.mainImage)}
                            alt={post.mainImage.alt ? post.mainImage.alt : post.title}
                            fill
                            className='object-cover group-hover:scale-105 transition-transform duration-200'
                          />
                        </div>
                      )}
                      
                      {/* Content */}
                      <div className='p-6 flex-1 flex flex-col'>
                        {/* Categories */}
                        {post.categories && post.categories.length > 0 && (
                          <div className='flex flex-wrap gap-2 mb-3'>
                            {post.categories.map((category) => (
                              <span 
                                key={category._id}
                                className='text-xs font-medium px-3 py-1 bg-[var(--color-primary)] text-white rounded-full'
                              >
                                {category.title}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {/* Title */}
                        <h2 className='text-xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors overflow-hidden' style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}>
                          {post.title}
                        </h2>
                        
                        {/* Description */}
                        <p className='text-[var(--color-text-secondary)] text-sm mb-4 flex-1 overflow-hidden' style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}>
                          {post.description}
                        </p>
                        
                        {/* Meta */}
                        <div className='mt-auto pt-4 border-t border-[var(--color-border-subtle)]'>
                          <div className='flex items-center justify-between text-xs text-[var(--color-text-secondary)]'>
                            <span>By {post.authorName}</span>
                            <span>{readTime} min read</span>
                          </div>
                          <p className='text-xs text-[var(--color-text-secondary)] mt-2'>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
