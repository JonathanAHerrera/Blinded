"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PoolBoyLockbox() {
    const router = useRouter();
    const [enteredCode, setEnteredCode] = useState("");
    const [error, setError] = useState(false);
    const correctCode = "68928832";

    const handleDigitClick = (digit) => {
        if (enteredCode.length < 8) {
            setEnteredCode(prev => prev + digit);
            setError(false);
        }
    };

    const handleClear = () => {
        setEnteredCode("");
        setError(false);
    };

    const handleSubmit = () => {
        if (enteredCode === correctCode) {
            router.push("/poolBoyLockboxOpen");
        } else {
            setError(true);
            setEnteredCode("");
        }
    };

    return (
        <div style={{
            backgroundImage: 'url("poolboyLockboxClose.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'black',
            height: '100vh',
            width: '100vw',
            position: 'relative'
        }}>
            {/* Pin Display */}
            <div style={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-20%, -130%)',
                display: 'flex',
                gap: '55px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: '25px',
                borderRadius: '15px'
            }}>
                {Array(8).fill(0).map((_, index) => (
                    <div key={index} style={{
                        width: '50px',
                        height: '60px',
                        backgroundColor: 'white',
                        border: error ? '2px solid red' : '1px solid gray',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        color: 'black'
                    }}>
                        {enteredCode[index] || ''}
                    </div>
                ))}
            </div>

            {/* Number Pad */}
            <div style={{
                position: 'absolute',
                top: '66%',
                left: '48%',
                transform: 'translate(0%, -50%)',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                backgroundColor: 'transparent',
                padding: '40px',
                borderRadius: '15px'
            }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
                    <button
                        key={digit}
                        onClick={() => handleDigitClick(digit.toString())}
                        style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '3rem',
                            color: 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.1s ease',
                        }}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        {digit}
                    </button>
                ))}
                <button
                    onClick={handleClear}
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'red',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.1s ease',
                    }}
                    onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                    onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    C
                </button>
                <button
                    onClick={handleSubmit}
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'green',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.1s ease',
                    }}
                    onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                    onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    ✓
                </button>
            </div>

            {/* Back Button */}
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
    );
}
