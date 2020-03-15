import React from 'react';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StageButton';

import { StyleTetrisWrapper, StyledTetris } from './styles/StyledTetris';

import { createStage } from '../gameHalper';

const Tetris = () => {
  console.log(createStage());

  return (
    <StyleTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
          <StartButton />
        </aside>
      </StyledTetris>
    </StyleTetrisWrapper>
  );
};

export default Tetris;
