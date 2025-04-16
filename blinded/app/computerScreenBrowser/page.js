"use client";

import { useRouter } from "next/navigation";

export default function CrimeScene() {
    const router = useRouter();

    return (
      <div style={{
        backgroundImage: 'url("computerScreen.jpg")',
        backgroundSize: '90%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        position: 'relative',
        height: '100vh',
        width: '100vw',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>

        <iframe  
            src="https://en.wikipedia.org/wiki/Caesar_cipher" 
            style={{
            backgroundImage: 'url("computerNote.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '35vh',
            width: '35vw',
            position: 'absolute',
            top: '24%',
            left: '32.5%',
        }}>
        </iframe>

        <div className="transition hover:scale-120 hover:drop-shadow-[#FF0]/60 drop-shadow-[#FF0]/30 drop-shadow-lg" 
            onClick={() => router.push("/computerScreenNote")} 
            style={{
            backgroundImage: 'url("apple-notes.svg")',
            backgroundSize: '100%',
            position: 'absolute',
            top: '61%',
            left: '37.5%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '1.75rem',
            width: '1.75rem',
            cursor: 'pointer',
        }}></div>
        <div className="transition hover:scale-120 hover:drop-shadow-[#FF0]/60 drop-shadow-[#FF0]/30 drop-shadow-lg" 
            onClick={() => router.push("/computerScreenBrowser")} 
            style={{
            backgroundImage: 'url("safari.png")',
            backgroundSize: '100%',
            position: 'absolute',
            top: '61%',
            left: '46.85%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '1.75rem',
            width: '1.75rem',
            cursor: 'pointer'
        }}></div>

        <button
        onClick={() => router.push("/computerScreen")}
        style={{
          position: "fixed",
          bottom: "3vh",
          left: "10vh",
          background: "none",
          border: "none",
          fontSize: "3vw",
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
  