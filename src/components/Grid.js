import React from 'react';
import Robot from './Robot';
import styles from './Grid.module.css';

function Grid({ robot, gridSize }) {
  const cells = Array(gridSize * gridSize).fill(null);

  return (
    <div className={styles.grid} style={{ gridTemplateColumns: `repeat(${gridSize}, 50px)` }}>
      {cells.map((_, index) => (
        <div key={index} className={styles.cell}>
          {index === robot.y * gridSize + robot.x && <Robot direction={robot.direction} />}
        </div>
      ))}
    </div>
  );
}


export default Grid;
