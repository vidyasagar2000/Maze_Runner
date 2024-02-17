import StartScreen from "../pages/StartScreen";
import MazePage from "../pages/MazePage";
import { useGame } from "./contexts/GameContext";
import FinishScreen from "../pages/FinishScreen";

function App() {
  const { status } = useGame();
  return (
    <div className="app">
      {status === "loading" && <StartScreen />}
      {status === "active" && <MazePage />}
      {status === "ready" && <MazePage />}
      {status === "submit" && <FinishScreen />}
    </div>
  );
}

export default App;
