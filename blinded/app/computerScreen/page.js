"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ExitButton from "../components/exitBtn";

export default function CrimeScene() {

    function generateCipher() {
        const password = "KING ARTHUR";
        let cipher = "";

        const key = Math.floor(Math.random() * 25) + 1;

        // 65 = A ; 90 = Z

        for (let i = 0; i < password.length; i++) {
            if (password[i] === ' ') cipher += " ";
            else {
                let charCode = password.charCodeAt(i);
                let shiftedCode = charCode + key;
                if (shiftedCode > 90) shiftedCode = 65 + ((shiftedCode - 65) % 26);
                cipher += String.fromCharCode(shiftedCode);
            }
        }

        sessionStorage.setItem("cipher", cipher);
        sessionStorage.setItem("key", key);
        
    }

    useEffect(() => {
        if (sessionStorage.getItem("newKey") === "true") {
            generateCipher();
            sessionStorage.removeItem("newKey");
        }
    }, []);

    const router = useRouter();

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

         <ExitButton></ExitButton>
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
            onClick={() => router.push("/computerScreenPassword")}
            style={{
            position: "absolute",
            top: "42%",
            left: "48.5%",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 0, 0.05)",
            boxShadow: "0 0 0 transparent",
            transition: "box-shadow 0.3s ease",
            border: "none",
            cursor: "pointer",
            }}
            onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
                "0 0 40px 20px rgba(255, 255, 0, 0.6)";
            }}
            onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 0 transparent";
            }}
        />
      </div>
    );
  }
  