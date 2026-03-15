function Message({ role, text }) {

  const isUser = role === "user";

  return (

    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>

      <div
        className={`px-4 py-3 rounded-2xl text-sm md:text-base max-w-[80%] whitespace-pre-wrap ${
          isUser
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-700 text-gray-200 rounded-bl-none"
        }`}
      >
        {text}
        {role === "bot" && <span className="animate-pulse">|</span>}
      </div>

    </div>

  );

}

export default Message;