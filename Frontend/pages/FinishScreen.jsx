import { useGame } from "../src/contexts/GameContext";

function FinishScreen() {
  const { points, highScore, dispatch } = useGame();
  const percentage = (points / 100) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage < 100 && percentage >= 80) emoji = "🥳";
  if (percentage < 80 && percentage >= 50) emoji = "🫠";
  if (percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤯";
  return (
    <>
      <p className="result">
        {emoji} You have scored <strong>{points}</strong> out of 100 (
        {Math.ceil(percentage)}%)
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
