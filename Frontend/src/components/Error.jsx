import Header from "./Header";

function Error({ msg }) {
  return (
    <>
      <Header />
      <p className="error">
        <span>💥</span>
        {msg}
      </p>
    </>
  );
}

export default Error;
