"use client";
import { useRouter } from "next/navigation";

export default function posterP2() {
    const router = useRouter();
    
    return (
      <div style={{
        backgroundImage: 'url("poster.png")',
        backgroundSize: '50%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        height: '100vh',
        width: '100vw',
      }}>

    <button
        onClick={() => router.push("/suspect1Room")}
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
        aria-label="Back"
      >
        ➤
      </button>

      </div>
    );
  }