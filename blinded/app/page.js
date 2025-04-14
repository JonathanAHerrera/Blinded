"use client"
import Image from "next/image";
import styles from "./page.module.css";

import { useRouter } from "next/navigation";


import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const handleStartClick = () => {
    router.push("/crimeScene");
  };

  const [ audio, setAudio ] = useState( true )

  return (
    <div style={{ backgroundImage: "url(login_background.png)", width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div className="centerBox" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap:"40px"}}>
        <div style={{ color: "white", fontSize:"20vh", fontFamily: "var(--font-title)" }}> BLINDED </div>
        <div className="Buttons" style={{ width: "100%", minHeight: "100px", display: "flex", justifyContent: "space-between", alignItems: "center", gap:"20px"}}>
          <button style={{ backgroundColor: "transparent", border:"none" }}>
            {
              ( audio ) &&  <img src="volume_up.png"/>
            
            }
          </button>
          <button onClick={handleStartClick} style={{ borderRadius: "10px", backgroundColor: "white", color: "black", border: "2px white solid", flex: "1", height: "100%", fontFamily: "var(--font-sue-ellen-francisco)", fontSize:"40px", cursor: "pointer"}}>
            Start
          </button>
          <button style={{ borderRadius: "10px", backgroundColor: "transparent", color: "white", border: "2px white solid", flex: "1", height: "100%", fontFamily: "var(--font-sue-ellen-francisco)", fontSize:"40px"}}>
            Resume
          </button>
          <button style={{ backgroundColor: "transparent", border:"none" }}>
            <img src="settings.png"/>
          </button>
        </div>
      </div>
    </div>
  );
}
