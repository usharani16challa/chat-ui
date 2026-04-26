import { useState } from "react";
import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import "./index.css";

function App() {
  const [messages, setMessages] = useState([
    { text: "Hi 👋 Welcome to Chat UI!", sender: "bot" }
  ]);

  const sendMessage = (msg) => {
    if (!msg.trim()) return;

    const userMessage = { text: msg, sender: "user" };
    const text = msg.toLowerCase();

    let botReply = "🤖 Sorry, I didn't understand that.";

    // Greetings
    if (text.includes("hello") || text.includes("hi")) {
      botReply = "Hello 👋 How are you doing today?";
    } 
    else if (text.includes("how are you")) {
      botReply = "I'm just a UI bot, but I'm doing great 😄";
    } 
    else if (text.includes("your name")) {
      botReply = "I'm ChatUI Bot 🤖 built with React!";
    } 
    else if (text.includes("help")) {
      botReply = "Sure 👍 I can reply to basic messages like hello, bye, thanks, etc.";
    } 
    else if (text.includes("bye")) {
      botReply = "Goodbye 👋 Take care!";
    } 
    else if (text.includes("thanks") || text.includes("thank you")) {
      botReply = "You're welcome 😊";
    } 
    else if (text.includes("react")) {
      botReply = "React is a powerful frontend library ⚛️";
    } 
    else if (text.includes("javascript")) {
      botReply = "JavaScript is the brain of web apps 🧠";
    } 
    else if (text.includes("css")) {
      botReply = "CSS makes your UI beautiful 🎨";
    } 
    else {
      botReply = "You said: " + msg;
    }

    const botMessage = { text: botReply, sender: "bot" };

    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  return (
    <div className="app">
      <h2>💬 Chat UI</h2>
      <ChatBox messages={messages} />
      <InputBox sendMessage={sendMessage} />
    </div>
  );
}

export default App;