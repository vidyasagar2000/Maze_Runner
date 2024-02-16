function FinishScreen({ points, totalPoints, highScore, dispatch }) {
    const percentage = (points / totalPoints) * 100;
  
    let emoji;
    if (percentage === 100) emoji = "🥇";
    if (percentage < 100 && percentage >= 80) emoji = "🥳";
    if (percentage < 80 && percentage >= 50) emoji = "🫠";
    if (percentage < 50) emoji = "🤨";
    if (percentage === 0) emoji = "🤯";
    return (
      <>
        <p className="result">
          {emoji} You have scored <strong>{points}</strong> out of {totalPoints} (
          {Math.ceil(percentage)}%)
        </p>
        <p className="highscore">(HighScore: {highScore} points)</p>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "Restart" })}
        >
          Restart Quiz
        </button>
      </>
    );
  }
  export default FinishScreen;
  