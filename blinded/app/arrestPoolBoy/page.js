'use client';

import { useEffect, useState } from 'react';

export default function ArrestPoolBoy() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50); // quick trigger
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        backgroundColor: 'black',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          backgroundImage: 'url("/arrestPoolBoy.jpeg")',
          backgroundSize: 'contain', // shows full image
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          width: '100%',
          transform: loaded ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 1.8s ease-in-out',
        }}
      />

      {/* Shadow Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 80%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
