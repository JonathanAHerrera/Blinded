'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EndMessage() {
  const router = useRouter();

  return (
    <div className={`end-scene`}>
      <button
        className="replay-btn"
        onClick={() => router.push('/crimeScene')}
        aria-label="Replay"
      />
      <button
        className="exit-btn"
        onClick={() => router.push('/')}
        aria-label="Exit"
      />

      <style jsx>{`
        .end-scene {
          background-image: url('/endMessage.jpg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          height: 100vh;
          width: 100vw;
          background-color: black;
          position: relative;
        }

        .fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .replay-btn,
        .exit-btn {
          position: absolute;
          width: 300px;
          height: 100px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        /* Place exactly over text shown in screenshot */
        .replay-btn {
          top: 56%;
          left: 33%;
        }

        .exit-btn {
          top: 56%;
          left: 54%;
        }
      `}</style>
    </div>
  );
}
