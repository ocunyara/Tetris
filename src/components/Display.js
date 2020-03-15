import React from 'react';
import PropTypes from 'prop-types';
import Stage from './Stage';

import { StylesDisplay } from './styles/StyledDisplay';

const Display = ({ gameOver, text }) => (
  <StylesDisplay gameOver={gameOver}>{text}</StylesDisplay>
)

Stage.propTypes = {
  text: PropTypes.string,
  gameOver: PropTypes.string,
};

export default Display;
