"use client";

import { useRouter } from "next/navigation";

export default function VictimsRoom() {
  const router = useRouter();

  const handleSafeBoxClick = () => {
    router.push("/safeBoxP1");
  };

  const handleChessClick = () => {
    router.push ("/chessBoardP1");
  }

  return (
    <div
      style={{
        backgroundImage: 'url("VictimsRoom.jpg")',
        backgroundSize: "70%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <button
        onClick={handleSafeBoxClick}
        style={{
          position: "absolute",
          top: "52%",
          left: "36%",
          width: "60px",
          height: "35px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 0, 0.05)",
          boxShadow: "0 0 0 transparent",
          transition: "box-shadow 0.3s ease",
          border: "none",
          cursor: "pointer",
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
        onClick={handleChessClick}
        style={{
          position: "absolute",
          top: "80%",
          left: "63%",
          width: "150px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 0, 0.05)",
          boxShadow: "0 0 0 transparent",
          transition: "box-shadow 0.3s ease",
          border: "none",
          cursor: "pointer",
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
  );
}


