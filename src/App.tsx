import { useContext } from "react";
import CastleOne from "./components/CastleOne";
import { MessageContext } from "./context/MessageContext";

function App() {
  const { message } = useContext(MessageContext);
  
  return (
    <div className="container">
      <div>
        <h1>My App useContext !!!</h1>
        <p>Message for: {message}</p>
        <CastleOne />
      </div>
    </div>
  );
}

export default App;
