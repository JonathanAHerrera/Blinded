"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SafeBox() {
  const [numberString, setNumberString] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleClick = (num) => {
    if (numberString.length < 4) {
      setNumberString((prev) => prev + num.toString());
    }
  };

  const handleBackspace = () => {
    setNumberString((prev) => prev.slice(0, -1));
    setMessage("");
  };

  const handleEnter = () => {
    if (numberString.length < 4) return;

    if (numberString === "1286") {
      setMessage("Pass");
      setTimeout(() => {
        router.push("/safeBoxSolvedP1");
      }, 1000);
    } else {
      setMessage("Fail");
      setTimeout(() => {
        setMessage("");
        setNumberString("");
      }, 1000);
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("closedSafeBox.jpeg")',
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >

    <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "min(50vw, 300px)", // Responsive size
        }}
    >

      {/* Message Box */}
      {message && (
        <div
          style={{
            position: "absolute",
            top: "20%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "10px 20px",
            border: "2px solid white",
            borderRadius: "8px",
            color: message === "Pass" ? "lime" : "red",
            fontSize: "18px",
            fontWeight: "bold",
            width: "20%",
            textAlign: "center",
            marginBottom: "10px"
          }}
        >
          {message}
        </div>
      )}

      {/* Keypad */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 20px)",
          gap: "6px",
          marginBottom: "39px",
          marginLeft: "179px",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button key={num} onClick={() => handleClick(num)} style={buttonStyle}>
            {num}
          </button>
        ))}
        <button onClick={handleEnter} disabled={numberString.length !== 4} style={{...buttonStyle, opacity: numberString.length === 4 ? 1 : 0.4,
            transition: "opacity 0.3s"}}>
          E
        </button>          
        <button onClick={() => handleClick(0)} style={buttonStyle}>
          0
        </button>
        <button onClick={handleBackspace} style={buttonStyle}>
          ⌫
        </button>
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width: "40px",
              height: "60px",
              border: "2px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              backgroundColor: "#222",
              color: "white",
            }}
          >
            {numberString[i] ?? ""}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
  width: "18px",
  height: "19px",
  border: "1px solid white",
  fontSize: "10px",
  cursor: "pointer",
};
