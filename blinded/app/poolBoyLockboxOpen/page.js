"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function poolBoyLockboxOpen() {
    const router = useRouter();

    useEffect(() => {
        sessionStorage.setItem("bookKey", "true");
      }, []);

    return (
        <div style={{
            backgroundImage: 'url("poolBoyLockboxOpen.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
        }}>

            <button
                onClick={() => router.push("/poolBoyRoom2")} 
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
            >
                ➤
            </button>
        </div>
    )
}   