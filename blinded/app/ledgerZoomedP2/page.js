"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ExitButton from "../components/exitBtn";

export default function LedgerZoomedP2() {
  const [digits, setDigits] = useState([0, 0, 0]);
  const [buttonGlow, setButtonGlow] = useState(null);
  const router = useRouter();

  const shapeComponents = [
    <svg width="100%" height="100%" viewBox="0 0 100 100"><rect x="20" y="20" width="60" height="60" stroke="black" strokeWidth="5" fill="none" /></svg>, // Square
    <svg width="100%" height="100%" viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" stroke="black" strokeWidth="5" fill="none" /></svg>, // Circle
    <svg width="100%" height="100%" viewBox="0 0 100 100"><polygon points="50,15 90,85 10,85" stroke="black" strokeWidth="5" fill="none" /></svg>, // Triangle
    <svg width="100%" height="100%" viewBox="0 0 100 100"><polygon points="50,10 70,40 60,80 40,80 30,40" stroke="black" strokeWidth="5" fill="none" /></svg>, // Pentagon
    <svg width="100%" height="100%" viewBox="0 0 100 100"><polygon points="50,10 61,35 90,35 66,55 76,85 50,65 24,85 34,55 10,35 39,35" stroke="black" strokeWidth="5" fill="none" /></svg>, // Star
  ];

  const correctCombo = [4, 3, 0]; // Star, Pentagon, Square

  const handleClick = (index) => {
    setDigits((prev) =>
      prev.map((val, i) => (i === index ? (val + 1) % shapeComponents.length : val))
    );
  };

  const handleButtonPress = () => {
    const isMatch = digits.every((val, i) => val === correctCombo[i]);
    if (isMatch) {
      setButtonGlow("green");
      setTimeout(() => {
        router.push("/openLedgerBoxP2");
      }, 1000);
    } else {
      setButtonGlow("red");
      setTimeout(() => {
        setDigits([0, 0, 0]);
        setButtonGlow(null);
      }, 1000);
    }
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

        <ExitButton></ExitButton>

      <div style={styles.container}>
        {digits.map((shapeIndex, index) => (
          <div
            key={index}
            style={styles.dialContainer}
            onClick={() => handleClick(index)}
          >
            {shapeComponents[shapeIndex]}
          </div>
        ))}
      </div>

      <div
        onClick={handleButtonPress}
        style={{
          ...styles.button,
          ...(buttonGlow === "green" && styles.greenGlow),
          ...(buttonGlow === "red" && styles.redGlow),
        }}
      ></div>

      <button
        onClick={() => router.push("/suspect1Room")}
        style={{
          position: "fixed",
          bottom: "3vh",
          left: "10vh",
          background: "none",
          border: "none",
          fontSize: "3vw",
          color: "white",
          cursor: "pointer",
          transform: "rotate(180deg)"
        }}
        aria-label="Back"
      >
        ➤
      </button>

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "2vw",
    position: "absolute",
    top: "49.5vh",
    left: "45.4vw",
    transform: "translate(-50%, -50%)",
  },
  dialContainer: {
    width: "3.2vw",
    height: "3.2vw",
    overflow: "hidden",
    border: "2px solid #aaa",
    borderRadius: "0.3vw",
    backgroundColor: "grey",
    boxShadow: "inset 0 0 10px #ccc, 0 0 8px rgba(255,255,255,0.3)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    top: "42.9vh",
    left: "65.2vw",
    transform: "translateX(-50%)",
    width: "6.5vw",
    height: "6.5vw",
    backgroundColor: "black",
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