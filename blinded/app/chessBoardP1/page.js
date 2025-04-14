"use client";

import { useState } from 'react';
import { useRouter } from "next/navigation";


export default function ChessBoard() {
  const [activeSpot, setActiveSpot] = useState(null);
  const router = useRouter();

  const positions = [
    { id: 1, top: '32%', left: '43.5%' }, //C3
    { id: 2, top: '36.5%', left: '34%' }, //A2
    { id: 3, top: '61.5%', left: '48%' }, //D8
    { id: 4, top: '53%', left: '52.8%' }, //E6
  ];

  const handleClick = (id) => {
    setActiveSpot(prev => (prev === id ? null : id));
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: 'relative',
          backgroundImage: 'url("chessBoardP1.jpeg")',
          backgroundSize: '80%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
          width: '100vw',
          maxWidth: "1300px",
          aspectRatio: "1 / 1"
        }}
      >
        {positions.map((pos) => (
          <div
            key={pos.id}
            style={{
              position: 'absolute',
              top: pos.top,
              left: pos.left,
              transform: "translate(-50%, -50%)",
              aspectRatio: "1 / 1",
              width: '4%',
              height: '4%',
              cursor: 'pointer',
            }}
            onClick={() => handleClick(pos.id)}
            onMouseLeave={() => setActiveSpot(null)}
          >
            {activeSpot === pos.id && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: "translate(-50%, -50%)",
                  width: '80%',
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  backgroundColor: pos.id === 3 ? '#A67B5B' : 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: "20%",
                    height: "20%",
                    borderRadius: "50%",
                    backgroundColor: "hotpink",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => router.push("/victimsRoom")}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "60px",
          background: "none",
          border: "none",
          fontSize: "2rem",
          color: "white",
          cursor: "pointer",
          transform: "rotate(180deg)"
        }}
        aria-label="Next"
      >
        ➤
      </button>

    </div>
  );
}
