"use client";

import { useRouter } from "next/navigation";

export default function suspectOneRoom() {
    const router = useRouter();
  
    const handlePosterClick = () => {
      router.push("/posterP2");
    };  
  
    const handleFloorLedgerClick = () => {
      router.push("/ledgerBoxP2");
    }; 

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
          width: "55vw", // Image scales with screen
          position: "relative",
        }}
      >
        <img
          src="blurredSuspectOneRoom.png"
          alt="Suspect Room"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />

      <button
        onClick={handlePosterClick}
        style={{
          position: "absolute",
          top: "36%",
          left: "8%",
          width: "5vw",
          height: "13vw",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 0, 0.05)",
          boxShadow: "0 0 0 transparent",
          transition: "box-shadow 0.3s ease",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 0 40px 20px rgba(255, 255, 0, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 0 transparent";
        }}
      />

      <button
        onClick={handleFloorLedgerClick}
        style={{
          position: "absolute",
          top: "88%",
          left: "58%",
          width: "5vw",
          height: "5vw",
          borderRadius: "50%",
          backgroundColor: "transparent",//"rgba(255, 255, 0, 0.05)",
          boxShadow: "0 0 0 transparent",
          transition: "box-shadow 0.3s ease",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 0 40px 20px rgba(255, 255, 0, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 0 transparent";
        }}
      />

      </div>
      </div>
    );
  }