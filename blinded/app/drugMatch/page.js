"use client";

import { useRouter } from "next/navigation";

export default function drugMatch() {
    const router = useRouter();

    return (
        <div style={{
            backgroundImage: 'url("drugMatch.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
        }}>

            <button
                onClick={() => router.push("/finalScene")}
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