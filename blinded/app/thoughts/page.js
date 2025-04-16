'use client'
import React, { useState, useEffect } from "react";
import FloatingThought from "@/components/DetectiveThoughts";
import { useRouter } from "next/navigation";

  const thoughts = {
    2: [
      "Poolboy found Cade's body, called us in. Another overdose, probably drowned right after. No needle marks, so it was definitely ingested. Just another sad case, nothing unusual here.",
      "The drug's been flagged by the FBI. It's fast-acting and only ingested. Easy to miss, but nothing too complicated. Probably just some careless mistake. Another drug death, just part of the job.",
      "This looks like a straightforward overdose case. No need to complicate things. Just find where the drug came from, tie up the loose ends, and close it.",
    ],
  };




const GameScene = () => {
  const [thought, setThought] = useState("");
  const [showThought, setShowThought] = useState(false);
  const [currLevel, setCurrLevel] = useState( 2 )
  const [index, setIndex] = useState( 0 )
  const [thoughtList, setThoughtList] = useState( [] )

  const router = useRouter();
  const triggerThought = (textToShow, displayTime = 10000) => {
    setThought(textToShow);
    setShowThought(true);
    console.log( "We are in" )
    // Automatically manage the isVisible state after duration + fadeOutTime
    // Note: The component itself handles hiding its content based on duration,
    // but we need to eventually set isVisible back to false in the parent
    // so it can be triggered again correctly. Add buffer for fade-out.
    setTimeout(() => {
      setShowThought(false);
    }, displayTime + 600);
  };

  useEffect( () => {
    const level = parseInt( localStorage.getItem( 'currLevel' ) ) 
    setCurrLevel( level )
    const thoughtListTemp = thoughts[ currLevel ]
    setThoughtList( thoughtListTemp )
    console.log( thoughtListTemp[ 0 ])
    triggerThought(thoughtListTemp[ 0 ], 3000);
  }, [] )

  const triggerNextThought = () => {
    const currIndex = index + 1
    setIndex( index + 1 );
    if ( currIndex >= thoughtList.length ){
      localStorage.setItem( 'currLevel', currLevel + 1 )
      router.push("/chat");
    }
    triggerThought( thoughtList[ currIndex ], 3000)
  }


  return (
    <div
      style={{
        height: "100vh",
        background: "black",
        position: "relative",
      }}
    >
      {/* Button to trigger the thought */}
      <button
        style={{
          position: "absolute",
          bottom: "50px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#333", // Dark gray background
          color: "#fff", // White text color for contrast
          border: "2px solid #444", // Slightly lighter gray border for subtlety
          padding: "12px 24px",
          fontSize: "16px",
          fontFamily: "Courier, monospace", // Monospaced font for the detective feel
          textTransform: "uppercase", // Uppercase text to give a stronger emphasis
          letterSpacing: "1px", // Slight letter spacing for a more dramatic look
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Shadow for depth
          cursor: "pointer",
          transition: "background-color 0.3s, transform 0.3s",
        }}
        onClick={() => triggerNextThought()}
        disabled={showThought} // Disable button while thought is showing
        onMouseEnter={(e) =>
          (e.target.style.transform = "translateX(-50%) scale(1.05)")
        } // Hover effect for a bit of pop
        onMouseLeave={(e) => (e.target.style.transform = "translateX(-50%)")} // Reset hover effect
      >
        {index < thoughtList.length - 1 ? "Next Thought" : "Next Scene"}
      </button>

      {/* The Floating Thought Component */}
      {/* It will only render content when isVisible is true */}
      <FloatingThought
        text={thought}
        isVisible={showThought}
        duration={3000} // How long it stays fully visible
      />
    </div>
  );
};

export default GameScene;
