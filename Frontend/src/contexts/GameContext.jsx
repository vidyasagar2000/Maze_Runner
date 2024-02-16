import { createContext, useContext, useReducer } from "react";
const GameContext = createContext();

const initialState = {};

function reducer(state, action) {
  switch (action.type) {
    case "1":
    case "2":
    default:
      throw new Error("Unknown action type");
  }
}

function GameProvider({ children }) {
  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
}

function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside AuthProvider");
  }
  return context;
}

export { useGame, GameProvider };
