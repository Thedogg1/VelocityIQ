import type { Metadata } from 'next';
import FeedbackForm from '@/components/FeedbackForm';

export const metadata: Metadata = {
  title: 'Full System Demo | VelocityIQ',
  description: 'Watch the full system demonstration video',
};

export default function SystemDemoPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6 text-[var(--color-text-primary)]">
          Full System Demo
        </h1>
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '8px',
            marginBottom: '1rem',
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/4t1Wyb3qaqw"
            title="Full System Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <p className="text-[var(--color-text-secondary)]">
          Watch the full demo above.
        </p>
      </div>

      <div className="mt-16">
        <FeedbackForm />
      </div>
    </div>
  );
}
