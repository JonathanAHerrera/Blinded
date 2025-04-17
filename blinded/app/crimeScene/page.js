"use client";

import { useRouter } from "next/navigation";
import ExitButton from "../components/exitBtn";

export default function CrimeScene() {
    const router = useRouter();

    return (
      <div style={{
        backgroundImage: 'url("crimeScene.jpg")',
        backgroundSize: '90%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        height: '100vh',
        width: '100vw',
      }}>

        <ExitButton></ExitButton>
   
      <button
        onClick={() => router.push("/askPoolBoy")}
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
  