"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CrimeScene() {

    const router = useRouter();
    const [passwordInput, setPasswordInput] = useState("");
    const [feedback, setFeedback] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (passwordInput.trim().toUpperCase() === "KING ARTHUR") {
          setFeedback("granted");
          setTimeout(() => router.push("/computerScreenDNA"), 1000);
        } else {
          setFeedback("denied");
        }
    };

    const handleInputChange = (e) => {
        setPasswordInput(e.target.value);
        if (feedback === "denied") {
            setFeedback(null);
        }
    };

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

        <form
            onSubmit={handleSubmit}
            className="flex gap-4 flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-1/2 -translate-y-3/4 border-2 border-neutral-800 bg-neutral-900 text-neutral-100"
            style={{
            height: "30vh",
            width: "20vw",
            }}
        >
            <h2>DNA-File.pdf</h2>
            <div>
            <label>Password:</label>
            <input
                type="text"
                value={passwordInput}
                onChange={handleInputChange}
                className="border-1 block p-2 !px-1"
            />
            </div>
            <button type="submit" className="border-1 !px-3 !py-1 cursor-pointer bg-neutral-100 text-neutral-900">Submit</button>

            {feedback === "granted" && (
            <p className="text-green-400 text-sm absolute bottom-4">Access granted</p>
            )}
            {feedback === "denied" && (
            <p className="text-red-500 text-sm absolute bottom-4">Access denied</p>
            )}
        </form>

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
  