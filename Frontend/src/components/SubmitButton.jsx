import { useGame } from "../contexts/GameContext";

function SubmitButton() {
  const { dispatch, status } = useGame();
  return (
    <div>
      {status === "active" && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "ready" })}
        >
          Ready
        </button>
      )}
      {status === "ready" && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "submit" })}
        >
          Submit
        </button>
      )}
    </div>
  );
}

export default SubmitButton;
