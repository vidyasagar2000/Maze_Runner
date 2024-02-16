function SubmitButton({ dispatch }) {
  return (
    <div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "submit" })}
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitButton;
