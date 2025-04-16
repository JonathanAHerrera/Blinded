"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CrimeScene() {
    const router = useRouter();
    const [cipher, setCipher] = useState("");
    const [key, setKey] = useState("");

    useEffect(() => {
        const storedCipher = sessionStorage.getItem("cipher");
        const storedKey = sessionStorage.getItem("key");
        if (storedCipher && storedKey) {
          setCipher(storedCipher);
          setKey(storedKey);
        }
      }, []);

    return (
      <div style={{
        backgroundImage: 'url("computerScreen.jpg")',
        backgroundSize: '90%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        height: '100vh',
        width: '100vw',
      }}>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4" style={{
            backgroundImage: 'url("computerNote.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '35vh',
            width: '35vw',
            top: '24%',
            left: '32.5%',
        }}>
            <div className="absolute top-1/4 left-32/100 text-neutral-100 text-sm">
                <p className="!mb-4">{cipher}</p>
                <p className="text-[0.65rem]">This needs to be more secure<br></br> for now its just a caesar cipher</p>
                <p className="text-[0.65rem]">Key: {key}</p>
            </div>
        </div>

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
  