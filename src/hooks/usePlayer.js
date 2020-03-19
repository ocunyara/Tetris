import { useState, useCallback } from 'react';

import { TETROMINOS, randomTetrominos } from '../tetrominos';
import { checkCollision, STAGE_WIDTH } from '../gameHalper';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetrominos().shape,
      collided: false,
    });
  }, []);

  const rotate = (matrix, dir) => {
    // Make the rows to become cols

    const rotatedTetro = matrix.map((_, index) =>
      matrix.map(col => col[index]),
    );

    // Reverse each row to get a rotated matrix
    if (dir > 0) return rotatedTetro.map(row => row.reverse());

    return rotatedTetro.reverse();
  };

  const playerRotate = (stage, dir) => {
    const clonePlayer = JSON.parse(JSON.stringify(player));

    clonePlayer.tetromino = rotate(clonePlayer.tetromino, dir);

    const pos = clonePlayer.pos.x;

    let offset = 1;

    while (checkCollision(clonePlayer, stage, { x: 0, y: 0 })) {
      clonePlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));

      if (offset > clonePlayer.tetromino[0].length) {
        rotate(clonePlayer.tetromino, -dir);
        clonePlayer.pos.x = pos;

        return;
      }
    }

    setPlayer(clonePlayer);
  };

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
