import { createContext, useContext, useReducer } from "react";
const GameContext = createContext();

const initialState = {
  secondsRemaining: 30,
  mazeNumber: 0,
  points: 0,
  highScore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "1":
    case "2":
    default:
      throw new Error("Unknown action type");
  }
}

function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function MazeInput() {
    const randomData = [
      [0, 0],
      [1, 2],
      [1, 1],
      [1, 0],
      [1, 3],
      [2, 2],
      [3, 2],
      [3, 3],
    ];
    const n = 4;
    const m = 4;
    const V = [];

    for (let i = 0; i < n; i++) {
      const row = Array(m).fill(0);
      V.push(row);
    }

    for (let i = 0; i < randomData.length; i++) {
      V[randomData[i][0]][randomData[i][1]] = 1;
    }

    return V;
  }

  
  return (
    <GameContext.Provider
      value={{
        MazeInput,
        reducer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside AuthProvider");
  }
  return context;
}

export { useGame, GameProvider };
