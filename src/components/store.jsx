import React, { createContext, useReducer } from "react";
import Reducer from "../Reducer";

const initialState = {
  musicIsPlayed: false
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const GlobalStateContext = createContext(initialState);
export default Store;
