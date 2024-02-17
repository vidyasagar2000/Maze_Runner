import Header from "../src/components/Header";
import { useGame } from "../src/contexts/GameContext";

function StartScreen() {
  const { dispatch, MazeInput } = useGame();
  const V = MazeInput();
  return (
    <>
      <Header />
      <div className="start">
        <h2>Welcome to the Maze Runner!</h2>
        <h3>Remember the path and get the prize.</h3>
        <h3>Work Speedly to get more points</h3>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "start", payload: V })}
        >
          Let's Start
        </button>
      </div>
    </>
  );
}

export default StartScreen;
