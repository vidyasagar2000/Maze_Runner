function NextButton({ dispatch }) {
  return (
    <div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "submit" })}
      >
        Next
      </button>
    </div>
  );
}

export default NextButton;
