function Error({ msg }) {
  return (
    <p className="error">
      <span>💥</span>
      {msg}
    </p>
  );
}

export default Error;
