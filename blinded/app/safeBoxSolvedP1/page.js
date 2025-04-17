"use client";

import { useRouter } from "next/navigation";
import ExitButton from "../components/exitBtn";

export default function WhiteCard() {
    const router = useRouter();

    return (
      <div style={{
        backgroundImage: 'url("whiteCardP1.jpg")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        height: '100vh',
        width: '100vw',
      }}>

        <ExitButton></ExitButton>

      <button
        onClick={() => {
          localStorage.setItem( 'currLevel', 3 )
          router.push("/thoughts")
        }
        }
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