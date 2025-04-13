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
          background-size: 90%;
          background-position: center;
          background-repeat: no-repeat;
          background-color: black;
          animation: zoomEffect 10s ease-in-out forwards;
        }

        @keyframes zoomEffect {
          0% {
            background-size: 90%;
          }
          100% {
            background-size: 100%;
          }
        }
      `}</style>
    </>
  );
}
