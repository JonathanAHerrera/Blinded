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
    3: [
      "I checked the police database, and sure enough, there’s a match for that phone number—just a single name attached to it. ‘Gerry Cahns.’ The name doesn’t ring any bells, but it’s something. The database shows he’s listed as a waiter, but the address is unfamiliar.",
      "I need to ask the captain about this ‘Gerry Cahns.’ Maybe he knows something—if he’s a regular around here, there’s a chance the captain has seen him or heard something. It’s time to find out if this name means more than just a record in the system.",
    ],
    5: [
      "Opening that ledger was a step closer to the truth. Cade Smith’s name, the amounts listed—this wasn’t just a chance meeting. Gerry Cahns is running this drug trade, and Cade was in the middle of it.",
      "The evidence is clear now, it all leads back to Gerry Cahns. I need to talk to him, figure out exactly what he’s been up to, and why Cade got tangled in this mess.",
    ],
    6: [
      "The detective looks through the security footage of the night of the cruise party, and to his surprise he sees the victim talking to the red hair girl. The same girl Gerry mentioned.",
      "After looking through the database we identify her as Samantha Harrison",
    ],
    7: [
      "Samantha’s story checks out. She’s having an affair with Cade, but her alibi holds up. No sign of foul play from her—just a heartbroken woman caught in a messy situation. Still, she’s not the killer.",
      "That leaves Gerry. The waiter. But his alibi holds too. There’s nothing pointing to him. His connection to the drug doesn’t make him a murderer. No, I’ve got nothing solid on him.",
      "Then there’s Richard. He’s the one with the real motive now—Cade sleeping with his girlfriend. It’s messy, it’s personal, and it could’ve been enough to push him over the edge. Time to turn the heat up on him. He’s the next suspect.",
    ],
    8: [
      "Richard’s alibi had checked out, just like the others. That left me with nothing but a dead end... until he mentioned the argument at the party. Cade had been fighting with someone—that was a new lead.",
      "I had asked Richard to describe this man, and he said the guy had a tattoo of an animal on his right wrist. It was a clue, but it was vague. A tattoo could be anything.",
      "Then it hit me—the poolboy. I remembered asking him questions at the crime scene. He had a tattoo, a rabbit on his right wrist. That wasn’t a coincidence. The poolboy’s tattoo, the argument at the party—it all connected.",
      "The poolboy's room was the next place to check. I needed to know if there was something I had missed. As I went through his things, I found his laptop—something told me it was worth a look.",
      "I opened the laptop and came across a DNA file. It looked important, but it was encrypted. A quick glance didn’t give me any immediate answers, but it was a lead. There had to be a way to crack it.",
      "I checked his Notes app. It seemed ordinary at first, but then I spotted something. A series of notes that didn’t seem to fit—codes, locations, and names. It wasn’t just random information. This was something deeper, something I could use.",
    ],
    9: [
      "I typed in the password and unlocked the DNA test results. My eyes went straight to the name—Cade Smith. It was a match. The poolboy was Cade’s biological son. That changed everything.",
      "I started piecing the clues together. Samantha had said Cade had a serious relationship with an unmarried woman twenty years ago. That matched the poolboy’s age—he was around twenty. This wasn’t just a coincidence.",
      "The DNA test confirmed it. The poolboy wasn’t just an innocent bystander. He was Cade’s son, and that gave him a connection to everything. It was time to dig deeper—there had to be more to find in his room.",
    ],
    10: [
      "I ran the drug through the system, and sure enough—it was the same substance Cade had ingested, the one that ultimately killed him. The same drug that his mother had overdosed on. The connection was clear now. This wasn’t just a coincidence. The drug was the key, and it all pointed back to the poolboy.",
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
    console.log( "currLevelinTHOUGHTS", level )
    setCurrLevel( level )
    const thoughtListTemp = thoughts[ level ]
    setThoughtList( thoughtListTemp )
    console.log( thoughtListTemp )
    triggerThought(thoughtListTemp[ 0 ], 10000);
  }, [] )

  const triggerNextThought = () => {
    const currIndex = index + 1
    setIndex( index + 1 );
    console.log( currLevel )
    if ( currIndex >= thoughtList.length && currLevel === 2 ){
      localStorage.setItem( 'currLevel', currLevel + 1 )
      router.push("/victimsRoom");
    } else if (currIndex >= thoughtList.length && currLevel === 3 ){
      localStorage.setItem( 'currLevel', currLevel + 1 )
      router.push("/chat");
    } else if (currIndex >= thoughtList.length && currLevel === 5 ){
      localStorage.setItem( 'currLevel', currLevel + 1 )
      router.push("/chat");
    } else if (currIndex >= thoughtList.length && currLevel === 6 ){
      localStorage.setItem( 'currLevel', currLevel + 1 )
      router.push("/chat");
    } else if (currIndex >= thoughtList.length && currLevel === 7 ){
      localStorage.setItem( 'currLevel', currLevel + 1 )
      router.push("/chat");
    } else if (currIndex >= thoughtList.length && currLevel === 8 ){
      localStorage.setItem( 'currLevel', currLevel + 1 )
      router.push("/poolBoyRoom");
    } else if (currIndex >= thoughtList.length && currLevel === 9 ){
      localStorage.setItem( 'currLevel', currLevel + 1 )
      router.push("/poolBoyRoom2");
    }
    triggerThought( thoughtList[ currIndex ], 10000)
    
  }


  return (
    <div
      style={{
        height: "100vh",
        background: "black",
        position: "relative",
        backgroundImage: currLevel === 6 ? 'url("securityFootageRedHair.jpeg")' : "",
        backgroundSize: "cover",        // scales image to cover full area
        backgroundPosition: "center",   // centers the image
        backgroundRepeat: "no-repeat", 
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
        duration={10000} // How long it stays fully visible
      />
    </div>
  );
};

export default GameScene;
