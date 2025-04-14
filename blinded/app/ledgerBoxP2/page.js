"use client";

import { useRouter } from "next/navigation";

export default function LedgerBoxP2() {
    const router = useRouter();

    return (
      <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "55vw",
          position: "relative",
        }}
      >
        <img
          src="ledgerBoxP2.jpeg"
          alt="ledgerBox"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      
      <button
        onClick={() => router.push("/ledgerZoomedP2")}
        style={{
          position: "absolute",
          top: "39%",
          left: "30%",
          width: "30vw",
          height: "10vw",
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />

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
      </div>
    );
  }