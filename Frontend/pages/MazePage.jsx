import Header from "../src/components/Header";
import Maze from "../src/components/Maze";
import Timer from "../src/components/Timer";
import SubmitButton from "../src/components/SubmitButton";
import Footer from "../src/components/Footer";
import Main from "../src/components/Main";
import { useGame } from "../src/contexts/GameContext";
import { useEffect } from "react";

function MazePage() {
  const { status, inputString, setInputString } = useGame();
  useEffect(function () {
    setInputString("");
  }, []);
  return (
    <div className="mazePage">
      <Header />
      <div
        style={{
          display: "flex",
        }}
      >
        <Timer />
        <SubmitButton />
      </div>
      <Main>
        <Maze />
        <Footer>
          <form>
            <input
              value={inputString}
              style={{ fontSize: "30px" }}
              type="text"
              placeholder="Your Answer"
              onChange={(e) => setInputString(e.target.value)}
              disabled={status !== "ready"}
            />
          </form>
        </Footer>
      </Main>
    </div>
  );
}

export default MazePage;
