import React, { useState } from "react";
import Grid from "./components/Grid";
import Controls from "./components/Controls";
import "./App.css";

const GRID_SIZE = 5;

function App() {
  const [robot, setRobot] = useState({ x: 0, y: 0, direction: "N" });

  const moveForward = () => {
    setRobot(prevRobot => {
      const { x, y, direction } = prevRobot;
      switch (direction) {
        case "N":
          return { ...prevRobot, y: Math.max(0, y - 1) };
        case "E":
          return { ...prevRobot, x: Math.min(GRID_SIZE - 1, x + 1) };
        case "S":
          return { ...prevRobot, y: Math.min(GRID_SIZE - 1, y + 1) };
        case "W":
          return { ...prevRobot, x: Math.max(0, x - 1) };
        default:
          return prevRobot;
      }
    });
  };

  const rotate = turnDirection => {
    setRobot(prevRobot => {
      const directions = ["N", "E", "S", "W"];
      let currentIndex = directions.indexOf(prevRobot.direction);
      if (turnDirection === "left") {
        currentIndex = (currentIndex - 1 + 4) % 4;
      } else {
        currentIndex = (currentIndex + 1) % 4;
      }
      return { ...prevRobot, direction: directions[currentIndex] };
    });
  };

  return (
    <div className="App">
      <h1>Robot Simulator</h1>
      <Grid robot={robot} gridSize={GRID_SIZE} />
      <Controls
        moveForward={moveForward}
        rotateLeft={() => rotate("left")}
        rotateRight={() => rotate("right")}
      />
      <div className="status">
        Robot position: ({robot.x}, {robot.y}), facing {robot.direction}
      </div>
    </div>
  );
}

export default App;
