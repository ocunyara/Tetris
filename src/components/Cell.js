import React from 'react';

import { StylesCell } from './styles/StyledClell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
  <StylesCell type={type} color={TETROMINOS[type].color} />
);

export default React.memo(Cell);
