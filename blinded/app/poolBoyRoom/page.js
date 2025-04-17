"use client";

import { useRouter } from "next/navigation";
import ExitButton from "../components/exitBtn";

export default function poolBoyRoom() {
    const router = useRouter();

    const handleSafeBoxClick = () => {
        sessionStorage.setItem("newKey", "true");
        router.push("/computerScreen");
    };
    
    return (
      <div style={{
        backgroundImage: 'url("poolBoyRoom.jpg")',
        backgroundSize: '55%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'black',
        height: '100vh',
        width: '100vw',
      }}>
    
        <ExitButton></ExitButton>
    
        <button
            onClick={handleSafeBoxClick}
            style={{
            position: "absolute",
            top: "50%",
            left: "32%",
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