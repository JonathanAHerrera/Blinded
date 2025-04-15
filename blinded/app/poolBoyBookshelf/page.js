"use client";

import { useRouter } from "next/navigation";

export default function Bookshelf() {
    const router = useRouter();

    const handleBookshelfClick = () => {
        router.push("/poolBoyBookClosed");
    };

    return (
        <div style={{
            backgroundImage: 'url("poolboyBookshelf.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
        }}>

            <button
                onClick={handleBookshelfClick}
                style={{
                    position: "absolute",
                    top: "35%",
                    left: "53.5%",
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
                    e.currentTarget.style.boxShadow = "0 0 40px 20px rgba(255, 255, 0, 0.6)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 0 transparent";
                }}
            />

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