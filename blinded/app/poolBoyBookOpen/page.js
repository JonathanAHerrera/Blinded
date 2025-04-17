"use client";

import { useRouter } from "next/navigation";
import ExitButton from "../components/exitBtn";

export default function poolBoyBookOpen() {
    const router = useRouter();

    return (
        <div style={{
            backgroundImage: 'url("poolBoyBookOpen.png")',
            backgroundSize: '55%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
        }}>

            <ExitButton></ExitButton>

            <button
                onClick={() => router.push("/drugMatch")}
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