'use client';

import { useEffect } from 'react';

export default function confessPoolBoy() {
  useEffect(() => {
    document.body.style.margin = '0';
    return () => {
      document.body.style.margin = '';
    };
  }, []);

  return (
    <>
      <div className="interrogation-bg" />
      <style jsx>{`
        .interrogation-bg {
          height: 100vh;
          width: 100vw;
          background-image: url("/interrogationAngryScene.jpg"); 
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          background-color: black;
          animation: lashOut 0.5s ease-in-out;
        }

        @keyframes lashOut {
          0%   { transform: translate(0, 0) scale(1); }
          20%  { transform: translate(-5px, 2px) scale(1.03); }
          40%  { transform: translate(5px, -2px) scale(1.05); }
          60%  { transform: translate(-3px, 2px) scale(1.02); }
          80%  { transform: translate(2px, -1px) scale(1.01); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>
    </>
  );
}
