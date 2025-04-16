
'use client'
import React, { useState, useEffect } from "react";
import { readStreamableValue } from "ai/rsc";

import ChatbotUI from "@/components/chatbotUI";


const GamePage = () => {
  const [messages, setMessages] = useState([
    { role: 'Bot',
      content: 'Hi Im the poolboy'}
  ]) 
  const [message, setMessage] = useState([''])
  const [currentNpcName, setCurrentNpcName] = useState("OOOO")
  const [currLevel, setCurrLevel] = useState(0)



  const handleSendMessage = async ( currMessage ) => {
    setMessages((messages) => [...messages, {role:'User', content: currMessage}])
    try{
      const response = await fetch(`api/chatbot?level=${currLevel}`,{
        method: 'POST',
        headers: {'Content-Type' :  'application/json'},
        body: JSON.stringify([...messages, {role:'User', content: currMessage}])
      })
      const data = await response.json()
      setMessages((messages) => [...messages, {role:'Bot', content: data.message}])
      if (data.message.includes("NEXTSCENE")) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setMessages([{ role: "Bot", content: "Hi Im the cop" }]);
        setCurrLevel( currLevel + 1 );
      }
    } catch ( error ){
      console.error( "ERROR", error )
    }
  }

    // const newAiMessage = {
    //   id: Date.now() + "-npc", // Simple unique ID
    //   sender: currentNpcName, // Use the current NPC's name
    //   text: aiResponseText,
    // };
  useEffect( () => {

  }, [currLevel])

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(askPoolBoy.jpeg)",
          backgroundSize: "cover",
          zIndex: -1, 
        }}
      ></div>

      {/* Chatbot UI Layered on top */}
      <ChatbotUI
        messages={messages}
        onSendMessage={handleSendMessage}
        npcName={currentNpcName}
      />

    </div>
  );
};

export default GamePage;
