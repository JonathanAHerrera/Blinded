"use client";

import { useRouter } from "next/navigation";
import ExitButton from "../components/exitBtn";

export default function CrimeScene() {

    const router = useRouter();

    return (
      <div style={{
        backgroundImage: 'url("computerScreen.jpg")',
        backgroundSize: '90%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        position: "relative",
        height: '100vh',
        width: '100vw',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>

        <ExitButton></ExitButton>

        <div className="absolute top-1/2 left-1/2 -translate-1/2 -translate-y-1/2" style={{
            backgroundImage: 'url("DNAFile.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '90vh',
            width: '70vw',
            top: '5%',
            left: '15%',
            position: 'absolute',
        }}>
        </div>

        <button
            onClick={() => {
              router.push("/thoughts")
            }
          } 
            style={{
            position: "absolute",
            bottom: "20px",
            right: "60px",
            background: "none",
            border: "none",
            fontSize: "2rem",
            color: "white",
            cursor: "pointer"
            }}
            aria-label="Next"
        >
        ➤
        </button>

      </div>
    );
  }
  