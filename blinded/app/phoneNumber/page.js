"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ExitButton from "../components/exitBtn";


export default function PhoneNumber() {
    const router = useRouter();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setVisible(true);
        }, 700);
    
        return () => clearTimeout(timer);
      }, []);

    return (
      <div
        style={{
          backgroundImage: 'url("phoneNumber.jpeg")',
          backgroundSize: '60%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
          height: '100vh',
          width: '100vw',
          position: 'relative',
        }}
      >

        <ExitButton></ExitButton>

        <div
          style={{
            position: 'absolute',
            top: '52vh',
            left: '50vw', 
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            border: '2px solid white',
            borderRadius: '8px',
            padding: '10px 15px',
            color: 'white',
            fontSize: '1.2vw', 
            fontFamily: 'monospace',
            whiteSpace: 'nowrap',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        >
          Gerry Cahn: 972-563-9017
        </div>
        
        <button
        onClick={() => router.push("/cruiseCaptain")}
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

  
  