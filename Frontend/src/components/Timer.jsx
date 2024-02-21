import { useEffect } from "react";
import { useGame } from "../contexts/GameContext";

function Timer() {
  const { dispatch, secondsRemaining, status } = useGame();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(
    function () {
      if (status === "ready") return;
      if (secondsRemaining === 0) {
        dispatch({ type: "ready" });
      }
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch, status, secondsRemaining]
  );

  return (
    <div className="timer">
      {mins < 10 ? "0" : ""}
      {mins}:{seconds < 10 ? "0" : ""}
      {seconds}
    </div>
  );
}

export default Timer;
