import { useState, useRef, useEffect } from "react";
import Message from "./Message";
import { sendMessage } from "../services/api";

function ChatBox() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {

    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };

    setMessages(prev => [...prev, userMsg]);

    setInput("");
    setLoading(true);

    const res = await sendMessage(userMsg.text);

    const botMsg = { role: "bot", text: res.reply };

    setMessages(prev => [...prev, botMsg]);

    setLoading(false);

  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (

    <div className="flex flex-col h-[75vh] bg-gray-800 rounded-xl shadow-lg border border-gray-700">

      {/* Chat Area */}

      <div className="flex-1 overflow-y-auto p-4 space-y-3">

        {messages.map((msg, index) => (
          <Message key={index} role={msg.role} text={msg.text} />
        ))}

        {loading && (
          <div className="text-gray-400 text-sm italic">
            AskNova is thinking...
          </div>
        )}

        <div ref={chatEndRef}></div>

      </div>

      {/* Input Area */}

      <div className="border-t border-gray-700 p-3 flex gap-2">

        <input
          className="flex-1 bg-gray-700 text-white p-3 rounded-lg outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Ask anything..."
        />

        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 px-4 md:px-5 rounded-lg text-white font-medium transition"
        >
          Send
        </button>

      </div>

    </div>

  );

}

export default ChatBox;