import { useGame } from "../contexts/GameContext";
import styles from "./Maze.module.css";

function Maze() {
  const { currentMaze } = useGame();
  return (
    <div>
      <ul style={{ listStyleType: "none" }} className={styles.container}>
        {currentMaze.map((row, rowIndex) => (
          <li key={rowIndex}>
            {row.map((cell, colIndex) => (
              <span className={styles.item} key={colIndex}>
                {cell}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Maze;
