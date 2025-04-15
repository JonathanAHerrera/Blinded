"use client";

import { useRouter } from "next/navigation";

export default function PoolBoyRoom2() {
    const router = useRouter();

    const handleSafeBoxClick = () => {
        router.push("/poolBoyBookshelf");
    };

    const handleNoteClick = () => {
        router.push("/poolBoyNote");
    };

    const handlePeriodicTableClick = () => {
        router.push("/periodicTable");
    };

    const handleClosetClick = () => {
        router.push("/poolBoyCloset");
    };
    
    return (
        <div style={{
            backgroundImage: 'url("poolBoyRoom.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
        }}>

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
            />

            <button
                onClick={handleNoteClick}
                style={{
                    position: "absolute",
                    top: "66%",
                    left: "41%",
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

            <button
                onClick={handlePeriodicTableClick}
                style={{
                    position: "absolute",
                    top: "35%",
                    left: "41%",    
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

            <button
                onClick={handleClosetClick}
                style={{
                    position: "absolute",
                    top: "45%",
                    left: "57%",    
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