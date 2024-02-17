import Header from "../src/components/Header";
import Maze from "../src/components/Maze";
import Timer from "../src/components/Timer";
import SubmitButton from "../src/components/SubmitButton";
import Footer from "../src/components/Footer";
import Main from "../src/components/Main";
import { useGame } from "../src/contexts/GameContext";

function MazePage() {
  const { status } = useGame();
  return (
    <div className="mazePage">
      <Header />
      <Footer>
        <div
          style={{
            display: "flex",
          }}
        >
          <Timer />
          <SubmitButton />
        </div>
      </Footer>
      <Main>
        <Maze />
        <Footer>
          <form action="/answer" method="post">
            <input
              style={{ fontSize: "30px" }}
              type="text"
              name="answer"
              placeholder="Your Answer"
              disabled={status !== "ready"}
            />
          </form>
        </Footer>
      </Main>
    </div>
  );
}

export default MazePage;
