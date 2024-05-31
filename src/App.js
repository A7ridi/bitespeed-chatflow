import { useState } from "react";
import ChatFlowOverview from "./components/chatFlow/ChatFlowOverview";
import ChatRight from "./components/chatRight/ChatRight";
import Header from "./components/layout/Header";
import { ChatFlowProvider } from "./context/ChatFlowContext";

function App() {
  const [message, setMessage] = useState("");
  return (
    <>
      <ChatFlowProvider>
        <Header message={message} />

        <div className="mt-20 h-screen flex">
          <div className="w-4/5 p-4">
            <ChatFlowOverview />
          </div>

          <div className="w-px bg-gray-400 mx-4"></div>

          <ChatRight setMessage={setMessage} message={message} />
        </div>
      </ChatFlowProvider>
    </>
  );
}

export default App;
