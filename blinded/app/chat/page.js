
'use client'
import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import ChatbotUI from "@/components/chatbotUI";
import next from "next";




  const Name = {
    0: "Cop",
    1: "Pool Boy",
    2: "idkYet",
    4: "Police Captain",
    6: "Gerry Cahns",
    7: "Samantha Harrison",
    8: "Richard Harrison"
  };

  const image = {
    0: 'url("crimeScene.jpg")',
    1: 'url("askPoolBoy.jpeg")',
    4: 'url("cruiseCaptain.jepg")',
    6: 'url("talkingSuspectOne.jpeg")',
    7: 'url("askRedHairedGirl.jpeg")',
    8: 'url("askRichardTheBoyFriend.jpeg")'
  }

  const startingMessage = {
    1: [{ role: "Bot", content: "H-hi Detective I-I found the body like this" }],
    4: [{
      role: "Bot",
      content:
        "Hey detective how is the investigation going?",
    }],
    6: [{
      role: "Bot",
      content: "What do you want?"
    }],
    7: [{
      role: "Bot",
      content: "Good afternoon officer, what can I do for you?"
    }],
    8: [{
      role: "Bot",
      content: "Sorry officer im very busy right now but what can I do for you?"
    }]
  };


const GamePage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState([
    {
      role: "Bot",
      content:
        "Hey detective another brutal one today... what would you like to know?",
    },
  ]); 
  const [currentNpcName, setCurrentNpcName] = useState("Cop")
  const [currLevel, setCurrLevel] = useState(0)
  const [background, setBackground] = useState('url("crimeScene.jpg")');

  useEffect( () => {
    setCurrentNpcName( Name[ currLevel ] )
    const currLevelTemp = localStorage.getItem('currLevel')
    console.log("local", currLevelTemp)
    if ( currLevelTemp !== null ){
      console.log(" we setting it to ", currLevelTemp )
      setCurrLevel( parseInt( currLevelTemp ) )
      setBackground( image[ currLevelTemp ] )
      setCurrentNpcName( Name[ currLevel ] )
      setMessages( startingMessage[ currLevel ] )
    }

  }, [ currLevel ])

  const handleSendMessage = async ( currMessage ) => {
    let isNext = false;
    setMessages((messages) => [...messages, {role:'User', content: currMessage}])
    try{
      const response = await fetch(`api/chatbot?level=${currLevel}`,{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify([...messages, {role:'User', content: currMessage}])
      })
      const data = await response.json()
      let message = data.message
      if (message.includes("NEXTSCENE") ){
        console.log("next level")
        isNext = true;
        message = message.replace("NEXTSCENE", "");
      }
      console.log("WE ARE AT LEVEL", currLevel)
      setMessages((messages) => [...messages, {role:'Bot', content: message}])
      if (isNext && currLevel == 0) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const nextLevel = currLevel + 1;
        setCurrLevel(currLevel + 1);
        console.log("nxtLevel", nextLevel);
        localStorage.setItem("currLevel", nextLevel);
        setCurrentNpcName(Name[nextLevel]);
      } else if (isNext && currLevel == 1) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setCurrLevel(currLevel + 1);
        localStorage.setItem("currLevel", currLevel + 1);
        router.push("/thoughts");
      } else if (isNext && currLevel == 4) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setCurrLevel(currLevel + 1);
        localStorage.setItem("currLevel", currLevel);
        router.push("/suspect1Room");
      } else if (isNext && currLevel == 6) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setCurrLevel(currLevel + 1);
        localStorage.setItem("currLevel", currLevel);
        router.push("/thoughts");
      } else if (isNext && currLevel == 7) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setCurrLevel(currLevel + 1);
        localStorage.setItem("currLevel", currLevel);
        router.push("/thoughts");
      } else if (isNext && currLevel == 8) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setCurrLevel(currLevel + 1);
        localStorage.setItem("currLevel", currLevel);
        router.push("/thoughts");
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
          backgroundImage: background,
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
