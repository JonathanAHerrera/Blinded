"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// Style constant for keypad buttons based on SafeBox
const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    width: "55px",
    height: "38px",
    border: "1px solid white",
    fontSize: "20px",
    cursor: "pointer",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

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
                top: '48%',
                left: '49%',
                transform: 'translate(-19%, -132%)',
                display: 'flex',
                gap: '14px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: '20px',
                borderRadius: '8px'
            }}>
                {Array(8).fill(0).map((_, index) => (
                    <div key={index} style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#222',
                        border: error ? '2px solid red' : '2px solid white',
                        borderRadius: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '48px',
                        color: 'white'
                    }}>
                        {enteredCode[index] || ''}
                    </div>
                ))}
            </div>

            {/* Number Pad - Styled like SafeBox Keypad */}
            <div style={{
                position: 'absolute',
                top: '60%',
                left: '59%',
                transform: 'translate(-49%, -50%)',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 60px)',
                gap: '16px',
                backgroundColor: 'black',
                padding: '20px',
                borderRadius: '5px',
                zIndex: 10
            }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                    <button
                        key={digit}
                        onClick={() => handleDigitClick(digit.toString())}
                        style={buttonStyle}
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
                        ...buttonStyle,
                        gridColumn: '1',
                        backgroundColor: 'darkred',
                        color: 'white'
                    }}
                    onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                    onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    C
                </button>
                <button
                    key={0}
                    onClick={() => handleDigitClick('0')}
                    style={{
                        ...buttonStyle,
                        gridColumn: '2',
                    }}
                    onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                    onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    0
                </button>
                <button
                    onClick={handleSubmit}
                    disabled={enteredCode.length !== 8}
                    style={{
                        ...buttonStyle,
                        gridColumn: '3',
                        backgroundColor: 'darkgreen',
                        color: 'white',
                        opacity: enteredCode.length === 8 ? 1 : 0.4,
                        transition: "opacity 0.3s"
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
