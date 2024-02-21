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
      return { ...state, secondsRemaining: state.secondsRemaining - 1 };
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
  const [mazeSize, setMazeSize] = useState(4);
  const [inputString, setInputString] = useState("");
  const [difficulty, setDifficulty] = useState(4);

  function MazeInput() {
    const EasyData = [
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
        [1, 2],
        [2, 3],
      ],
    ];

    const MediumData = [
      [
        [0, 0],
        [4, 4],
      ],
      [
        [1, 1],
        [3, 3],
      ],
    ];
    const HardData = [
      [
        [0, 0],
        [5, 5],
      ],
      [
        [1, 1],
        [4, 4],
      ],
    ];
    const ExtremeData = [
      [
        [0, 0],
        [6, 6],
      ],
      [
        [1, 1],
        [5, 5],
      ],
    ];

    const V = [];

    for (let i = 0; i < mazeSize; i++) {
      const row = Array(mazeSize).fill(0);
      V.push(row);
    }
    const randomData =
      difficulty === 4
        ? EasyData
        : difficulty === 5
        ? MediumData
        : difficulty === 6
        ? HardData
        : ExtremeData;
    let selectRandomIdx = Math.floor(Math.random() * randomData.length);
    for (let i = 0; i < randomData[selectRandomIdx].length; i++) {
      V[randomData[selectRandomIdx][i][0]][
        randomData[selectRandomIdx][i][1]
      ] = 1;
    }

    return V;
  }

  return (
    <GameContext.Provider
      value={{
        secondsRemaining,
        currentMaze,
        points,
        highScore,
        status,
        inputString,
        mazeSize,
        difficulty,
        setMazeSize,
        setDifficulty,
        setInputString,
        dispatch,
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
