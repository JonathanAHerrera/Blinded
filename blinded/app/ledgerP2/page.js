"use client";

import { useRouter } from "next/navigation";

export default function LedgerP2() {
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
          src="ledger.png"
          alt="ledgerBox"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
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

      <button
        onClick={() =>  {         
          localStorage.setItem( 'currLevel', 5 )
          router.push("/thoughts")
        }}
        style={{
          position: "fixed",
          bottom: "3vh",
          right: "10vh",
          background: "none",
          border: "none",
          fontSize: "3vw",
          color: "white",
          cursor: "pointer"
        }}
        aria-label="Back"
      >
        ➤
      </button>

      </div>
      </div>
    );
  }