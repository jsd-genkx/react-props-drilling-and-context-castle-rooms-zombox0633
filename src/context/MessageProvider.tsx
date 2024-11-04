import { ReactNode, useMemo, useState } from "react";
import { MessageContext } from "./MessageContext";

export type ContextProviderPropsType = {
  children: ReactNode;
};

export const MessageProvider = ({ children }: ContextProviderPropsType) => {
  const [message, setMessage] = useState<string>("");

  const handleMessage = (message: string) => {
    setMessage(message.trim());
  };

  const value = useMemo(
    () => ({
      message,
      handleMessage,
    }),
    [message]
  );

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};
