import ChatFlowOverview from "./components/chatFlow/ChatFlowOverview";
import { ChatFlowProvider } from "./context/ChatFlowContext";

function App() {
  return (
    <ChatFlowProvider>
      <ChatFlowOverview />
    </ChatFlowProvider>
  );
}

export default App;
