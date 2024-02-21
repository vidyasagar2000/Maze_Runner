import { useGame } from "../src/contexts/GameContext";

function FinishScreen() {
  const {
    highScore,
    dispatch,
    secondsRemaining,
    inputString,
    currentMaze,
    mazeSize,
  } = useGame();
  let Ans = true;
  let row = 0,
    col = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === "U" || inputString === "u") {
      row--;
    }
    if (inputString[i] === "D" || inputString === "d") {
      row++;
    }
    if (inputString[i] === "L" || inputString === "l") {
      col--;
    }
    if (inputString[i] === "R" || inputString === "r") {
      col++;
    }
    if (
      row < 0 ||
      col < 0 ||
      row >= mazeSize ||
      col >= mazeSize ||
      currentMaze[row][col] === 0
    ) {
      Ans = false;
      break;
    }
  }
  let points;
  if (Ans && row === mazeSize - 1 && col === mazeSize - 1) {
    points = secondsRemaining * 4;
  } else {
    points = 0;
  }
  const percentage = points;

  let emoji;
  if (percentage >= 100) emoji = "🥇";
  if (percentage < 100 && percentage >= 80) emoji = "🥳";
  if (percentage < 80 && percentage >= 50) emoji = "🫠";
  if (percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤯";
  return (
    <>
      <p className="result">
        {emoji} You have scored <strong>{points}</strong> out of 100
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Game
      </button>
    </>
  );
}
export default FinishScreen;
