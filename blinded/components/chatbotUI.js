'use client'
import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatbotUI.module.css";

const ChatbotUI = ({
  messages = [],
  onSendMessage,
  npcName = "Mysterious Figure",
}) => {
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null); 

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue(""); 
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={styles.chatContainer}>
      {/* Message List */}
      <div className={styles.messageList}>
        {messages.map((msg, index) => (
          <div
            key={msg.id || index}
            className={`${styles.message} ${
              msg.sender === "player" ? styles.playerMessage : styles.npcMessage
            }`}
          >
            {msg.sender !== "player" && (
              <div className={styles.senderName}>{msg.sender || npcName}</div>
            )}
            <div className={styles.messageText}>{msg.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className={styles.inputArea}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your response..."
          className={styles.inputField}
          aria-label="Chat input"
        />
        <button onClick={handleSend} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotUI;
