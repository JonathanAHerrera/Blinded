"use client";

import { useRouter } from "next/navigation";
import ExitButton from "../components/exitBtn";

export default function CadeLetter() {
    const router = useRouter();

    return (
        <div style={{
            backgroundImage: 'url("cadeLetter.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
        }}>

            <ExitButton></ExitButton>

            <button
                onClick={() => router.push("/poolBoyRoom2")}
                style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "60px",
                    background: "none",
                    border: "none",
                    fontSize: "2rem",
                    color: "white",
                    cursor: "pointer",
                    transform: "rotate(180deg)"
                }}
            >
                ➤
            </button>
        </div>
    )
}   