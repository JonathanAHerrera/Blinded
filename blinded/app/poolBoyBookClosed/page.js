"use client";

import { useRouter } from "next/navigation";

export default function poolBoyBookClosed() {
  const router = useRouter();

  const handleBookClick = () => {
    if (!sessionStorage.getItem("bookKey")) {
      alert("You must find the key before you can open the book!");
      return; // Prevent further action if the key is missing
    }
    // If the key has been found, navigate to the open book page
    router.push("/poolBoyBookOpen");
  };

  return (
    <div
      style={{
        backgroundImage: 'url("poolBoyBookClosed.png")',
        backgroundSize: "55%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
      }}
    >
      <button
        onClick={handleBookClick}
        style={{
          position: "absolute",
          top: "43%",
          left: "52%",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
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
