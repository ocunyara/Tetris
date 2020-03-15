import React, { useState } from 'react';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StageButton';

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

import { StyleTetrisWrapper, StyledTetris } from './styles/StyledTetris';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log('re-render');

  return (
    <StyleTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game over" />
          ) : (
            <>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </>
          )}

          <StartButton />
        </aside>
      </StyledTetris>
    </StyleTetrisWrapper>
  );
};

export default Tetris;
