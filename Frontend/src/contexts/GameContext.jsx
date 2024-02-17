import { createContext, useContext, useReducer, useState } from "react";
const GameContext = createContext();

const initialState = {
  status: "loading",
  secondsRemaining: 30,
  currentMaze: [],
  points: 0,
  highScore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, currentMaze: action.payload, status: "active" };
    case "tick":
      return { ...state, secondsRemaining: state.secondsRemaining + 1 };
    case "ready":
      return { ...state, status: "ready" };
    case "submit":
      return {
        ...state,
        status: "submit",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    case "restart":
      return {
        ...initialState,
        highScore: state.highScore,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function GameProvider({ children }) {
  const [
    { secondsRemaining, currentMaze, points, highScore, status },
    dispatch,
  ] = useReducer(reducer, initialState);

  const [choosenIdx, setChoosenIdx] = useState(0);

  function MazeInput() {
    const randomData = [
      [
        [0, 0],
        [1, 2],
        [1, 1],
        [1, 0],
        [1, 3],
        [2, 2],
        [3, 2],
        [3, 3],
      ],
      [
        [0, 0],
        [1, 3],
        [1, 1],
        [1, 0],
        [1, 3],
        [2, 1],
        [0, 2],
        [3, 3],
      ],
    ];
    const n = 7;
    const m = 7;
    const V = [];

    for (let i = 0; i < n; i++) {
      const row = Array(m).fill(0);
      V.push(row);
    }
    let selectRandomIdx = Math.floor(Math.random() * randomData.length);
    setChoosenIdx(selectRandomIdx);

    for (let i = 0; i < randomData[selectRandomIdx].length; i++) {
      V[randomData[selectRandomIdx][i][0]][
        randomData[selectRandomIdx][i][1]
      ] = 1;
    }
    return V;
  }

  function CheckInput({ answerString = "URLT" }) {}

  return (
    <GameContext.Provider
      value={{
        secondsRemaining,
        currentMaze,
        points,
        highScore,
        choosenIdx,
        status,
        dispatch,
        MazeInput,
        reducer,
        CheckInput,
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
