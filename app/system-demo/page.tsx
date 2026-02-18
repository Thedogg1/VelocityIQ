import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Full System Demo | VelocityIQ',
  description: 'Watch the full system demonstration video',
};

export default function SystemDemoPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '2rem' }}>
      <h1>My Loom Video</h1>
      <video
        width="100%"
        height="auto"
        controls
        src="/videos/Full_system_demo.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
