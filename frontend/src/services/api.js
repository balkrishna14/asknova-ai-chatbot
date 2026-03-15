export const sendMessage = async (message) => {

  try {

    const res = await fetch("https://asknova-ai-chatbot.onrender.com/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    return data;

  } catch (error) {
    return { reply: "Server error. Please try again." };
  }

};