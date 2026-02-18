import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Full System Demo | VelocityIQ',
  description: 'Watch the full system demonstration video',
};

export default function SystemDemoPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '2rem' }}>
      <h1>Full System Demo</h1>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
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
      <p style={{ marginTop: '1rem' }}>Watch the full demo above.</p>
    </div>
  );
}
