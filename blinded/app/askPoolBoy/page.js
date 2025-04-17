"use client";

import { useRouter } from "next/navigation";
import ExitButton from "../components/exitBtn";

export default function askPoolBoy() {
    const router = useRouter();

    return (
      <div style={{
        backgroundImage: 'url("askPoolBoy.jpeg")',
        backgroundSize: '60%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        height: '100vh',
        width: '100vw',
      }}>

        <ExitButton></ExitButton>
              
      <button
        onClick={() => router.push("/victimsRoom")}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          background: "none",
          border: "none",
          fontSize: "2rem",
          color: "white",
          cursor: "pointer",
        }}
        aria-label="Next"
      >
        ➤
      </button>

      </div>
    );
  }