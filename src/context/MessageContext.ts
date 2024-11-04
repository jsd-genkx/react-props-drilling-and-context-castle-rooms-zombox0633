import { createContext } from "react";

export type MessageContextType = {
  message: string;
  handleMessage: (message: string) => void;
};

export const MessageContext = createContext<MessageContextType>({
  message: "",
  handleMessage: () => {},
});
