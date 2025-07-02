import React, { createContext, useState } from "react";

export const SelectedAnswerContext = createContext();

export const SelectedAnswerProvider = ({ children }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  return (
    <SelectedAnswerContext.Provider
      value={{ selectedAnswer, setSelectedAnswer }}
    >
      {children}
    </SelectedAnswerContext.Provider>
  );
};
