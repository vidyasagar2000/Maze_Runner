import Header from "../src/components/Header";
import { useGame } from "../src/contexts/GameContext";

function StartScreen() {
  const { dispatch, MazeInput, setDifficulty, difficulty, setMazeSize } =
    useGame();
  const V = MazeInput();

  function handleDifficultyLevel(e) {
    setDifficulty(Number(e.target.value));
    setMazeSize(Number(e.target.value));
  }

  return (
    <>
      <Header />
      <div className="start">
        <h2>Welcome to the Maze Runner!</h2>
        <h3>Remember the path and get the prize.</h3>
        <h3>Work Speedly to get more points</h3>
        <label htmlFor="difficulty" style={{ fontSize: "20px" }}>
          Difficulty Level:
        </label>
        <select
          id="difficulty"
          style={{ fontSize: "20px" }}
          value={difficulty}
          onChange={handleDifficultyLevel}
        >
          <option value="4">Easy</option>
          <option value="5">Medium</option>
          <option value="6">Hard</option>
          <option value="7">Extreme</option>
        </select>

        <button
          className="btn btn-ui"
          style={{ marginTop: "100px" }}
          onClick={() => dispatch({ type: "start", payload: V })}
        >
          Let's Start
        </button>
      </div>
    </>
  );
}

export default StartScreen;
