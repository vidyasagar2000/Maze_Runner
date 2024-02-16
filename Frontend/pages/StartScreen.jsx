function StartScreen({ dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the Maze Runner!</h2>
      <h3>Remember the path and get the prize.</h3>
      <h3>Work Speedly to get more points</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
