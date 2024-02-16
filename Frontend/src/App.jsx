import Header from "./components/Header";
import StartScreen from "../pages/StartScreen";
import { GameProvider } from "./contexts/GameContext";
import Maze from "./components/Maze";

function App() {
  return (
    <div className="app">
      <GameProvider>
        <Header />
        {true ? <Maze /> : <StartScreen />}
        {/* <MazePage /> */}
      </GameProvider>
    </div>
  );
}

export default App;
