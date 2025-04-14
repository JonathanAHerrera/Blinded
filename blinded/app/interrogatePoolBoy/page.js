'use client';

import { useEffect } from 'react';

export default function InterrogatePoolBoy() {
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
          background-image: url("/interrogationScene.jpg"); 
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          background-color: black;

          opacity: 0;
          filter: blur(10px);
          animation: revealScene 2s ease-out forwards;
        }

        @keyframes revealScene {
          0% {
            opacity: 0;
            filter: blur(10px);
          }
          50% {
            opacity: 0.5;
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </>
  );
}
