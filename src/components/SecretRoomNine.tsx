import { useContext, useState } from "react";
import { MessageContext } from "../context/MessageContext";

function SecretRoomNine() {
  const { message, handleMessage } = useContext(MessageContext);

  const [inputMessage, setInputMessage] = useState<string>("");

  return (
    <div>
      <h1>SecretRoomNine</h1>
      <p>Message for: {message}</p>
      <div className="form-data">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          required
        />
        <button type="button" onClick={() => handleMessage(inputMessage)}>
          Send
        </button>
      </div>
    </div>
  );
}

export default SecretRoomNine;
