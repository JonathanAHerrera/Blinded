"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LedgerZoomedP2() {
  const [digits, setDigits] = useState([0, 0, 0]);
  const [buttonGlow, setButtonGlow] = useState(null); // Track button glow state
  const router = useRouter();

  const handleButtonPress = () => {
    const inputDigits = digits.join(""); // Combine digits into a string

    if (inputDigits === "354") {
      // If the digits match, glow green and reroute
      setButtonGlow("green");
      setTimeout(() => {
        router.push("/nextPage"); // Navigate to the next page
      }, 500); // Wait 0.5 seconds before rerouting
    } else {
      // If the digits don't match, glow red and reset digits
      setButtonGlow("red");
      setTimeout(() => {
        setDigits([0, 0, 0]); // Reset digits to 0, 0, 0
        setButtonGlow(null); // Reset button glow
      }, 500); // Wait 0.5 seconds before resetting
    }
  };

  const handleClick = (index) => {
    setDigits((prev) =>
      prev.map((d, i) => (i === index ? (d + 1) % 10 : d))
    );
  };

  return (
    <div
      style={{
        backgroundImage: 'url("ledgerZoomedIn.png")',
        backgroundSize: "60%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <div style={styles.container}>
        {digits.map((digit, index) => (
          <div
            key={index}
            style={styles.dialContainer}
            onClick={() => handleClick(index)}
          >
            <div
              style={{
                ...styles.dial,
                transform: `translateY(-${digit * 2.5}vw)`,
              }}
            >
              {[...Array(10).keys()].map((num, i) => (
                <div key={i} style={styles.number}>
                  {num}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* The enter button */}
      <div
        onClick={handleButtonPress}
        style={{
          ...styles.button,
          ...(buttonGlow === "green" && styles.greenGlow),
          ...(buttonGlow === "red" && styles.redGlow),
        }}
      >
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "2.3vw",
    position: "absolute",
    top: "49.5vh",
    left: "45.5vw",
    transform: "translate(-50%, -50%)",
  },
  dialContainer: {
    width: "3vw",
    height: "3vw",
    overflow: "hidden",
    border: "2px solid #aaa",
    borderRadius: "0.3vw",
    background: "radial-gradient(circle at top left, #e0e0e0, #a9a9a9)",
    boxShadow: "inset 0 0 10px #ccc, 0 0 8px rgba(255,255,255,0.3)",
    cursor: "pointer",
  },
  dial: {
    transition: "transform 0.3s ease-in-out",
  },
  number: {
    height: "2.5vw",
    color: "#222",
    fontSize: "2vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "monospace",
  },
  button: {
    position: "absolute",
    top: "45vh",
    left: "65.1vw",
    transform: "translateX(-50%)",
    width: "6.5vw",
    height: "6.5vw",
    backgroundColor: "black",//"#333",
    color: "#fff",
    fontSize: "2vw",
    fontFamily: "monospace",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "10vw",
    boxShadow: "0 0 5px rgba(255, 255, 255, 0.2)",
    transition: "background-color 0.5s ease",
  },
  greenGlow: {
    backgroundColor: "green",
    boxShadow: "0 0 20px green",
  },
  redGlow: {
    backgroundColor: "red",
    boxShadow: "0 0 20px red",
  },
};