"use client";

import { useRouter } from "next/navigation";
import ExitButton from "../components/exitBtn";

export default function PoolBoyCloset() {
    const router = useRouter();

    const handleLockboxClick = () => {
        router.push("/poolBoyLockbox");
    };

    return (
        <div style={{
            backgroundImage: 'url("poolBoyCloset.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
        }}>

            <ExitButton></ExitButton>
            <button
                onClick={handleLockboxClick}
                style={{
                    position: "absolute",
                    top: "85%",
                    left: "52%",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 0, 0.05)",
                    boxShadow: "0 0 0 transparent",
                    transition: "box-shadow 0.3s ease",
                    border: "none",
                    cursor: "pointer",
                }}
            />
        </div>
    )   
}       