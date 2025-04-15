
'use client'
import React, { useState, useEffect } from "react";
import ChatbotUI from "@/components/chatbotUI";

const gamepage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Mysterious Figure",
      text: "It was a dark and stormy night... or was it? Tell me what you saw.",
    },
    // { id: 2, sender: 'player', text: 'I saw nothing out of the ordinary.' },
  ]);
  const [currentNpcName, setCurrentNpcName] = useState("Mysterious Figure");

  // --- Function to handle sending a message ---
  // This is where you'd integrate with your AI service
  const handleSendMessage = async (playerMessageText) => {
    // 1. Add player message immediately to the UI
    const newPlayerMessage = {
      id: Date.now() + "-player", // Simple unique ID
      sender: "player",
      text: playerMessageText,
    };
    setMessages((prevMessages) => [...prevMessages, newPlayerMessage]);

    // 2. Send player message to AI backend (replace with your actual API call)
    console.log("Sending to AI:", playerMessageText);
    // --- Replace this section with your actual AI call ---
    // Example: Simulate AI response after a delay
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
    const aiResponseText = `You said "${playerMessageText}"? Interesting... very interesting. The rain obscures many things.`;
    // --- End AI call simulation ---

    // 3. Add AI response to the UI
    const newAiMessage = {
      id: Date.now() + "-npc", // Simple unique ID
      sender: currentNpcName, // Use the current NPC's name
      text: aiResponseText,
    };
    setMessages((prevMessages) => [...prevMessages, newAiMessage]);
  };

  // --- Font Import ---
  // Make sure 'Libre Baskerville' is loaded.
  // Add this in your _app.js, _document.js, or a global CSS file:
  // @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
  // Or use Next.js font optimization: https://nextjs.org/docs/basic-features/font-optimization

  return (
    <div
      style={
        {
          /* Your main game container styles */
        }
      }
    >
      {/* Your game scene/background image would go here */}
      {/* <GameScene backgroundImage="/path/to/your/scene.jpg" /> */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(askPoolBoy.jpeg)", // EXAMPLE Background
          backgroundSize: "cover",
          zIndex: -1, // Ensure background is behind UI
        }}
      ></div>

      {/* Chatbot UI Layered on top */}
      <ChatbotUI
        messages={messages}
        onSendMessage={handleSendMessage}
        npcName={currentNpcName}
      />

      {/* Other game UI elements */}
    </div>
  );
};

export default GamePage;
