import ChatBox from "./components/chatbox";

function App() {

  return (

    <div className="min-h-screen bg-linear-to-b from-gray-900 flex items-center justify-center px-4">

      <div className="w-full max-w-2xl">

        <h1 className="text-3xl md:text-4xl font-bold text-center pt-4 text-white mb-6">
          AskNova
        </h1>

        <ChatBox />

      </div>

    </div>

  );

}

export default App;