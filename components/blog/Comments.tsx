'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import type { Post } from '@/typings';

type CommentInput = {
  _id: string;
  name: string;
  email: string;
  comment: string;
};

type CommentsProps = {
  post: Post;
};

const Comments = ({ post }: CommentsProps) => {
  // Feature disabled - return null if comments are not enabled
  if (process.env.NEXT_PUBLIC_ENABLE_COMMENTS !== 'true') {
    return null;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentInput>();

  const onSubmit: SubmitHandler<CommentInput> = (data) => {
    fetch('/api/createComment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to submit comment');
        }
        return response.json();
      })
      .then(() => {
        toast.success(
          'Your comment has been submitted and is awaiting approval'
        );
      })
      .catch((error: Error) => {
        toast.error(error.message || 'Failed to submit comment');
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Leave a Comment</h3>
          <div>
            <label htmlFor='commentName'>Name</label>
            <input
              id='commentName'
              {...register('name', { required: true })}
              placeholder='John Doe'
              type='text'
              autoComplete='off'
            />
          </div>
          <div>
            <label htmlFor='emailField'>Email</label>
            <input
              id='emailField'
              {...register('email', { required: true })}
              placeholder='johndoe@gmail.com'
              type='email'
              autoComplete='off'
            />
          </div>
          <div>
            <label htmlFor='commentField'>Comment</label>
            <textarea
              id='commentField'
              {...register('comment', { required: true })}
              placeholder='Your comment...'
              rows={8}
            />
          </div>
          <div>
            {errors.name && (
              <span>The Name Field Is Required</span>
            )}
            {errors.email && (
              <span>The Email Field Is Required</span>
            )}
            {errors.comment && (
              <span>The Comments Field Is Required</span>
            )}
          </div>
          <input
            id='commentID'
            {...register('_id')}
            type='hidden'
            name='_id'
            value={post._id}
          />
          <input
            type='submit'
            value='Submit Comment'
          />
        </form>
      </div>
      <div>
        <h1>Comments</h1>
        {!post.comments || post.comments.length < 1 ? (
          <p>Be the first to comment</p>
        ) : (
          <div>
            {post.comments.map((comment) => (
              <div key={comment._id}>
                <p>{comment.name}</p>
                <p>
                  {new Date(comment._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
