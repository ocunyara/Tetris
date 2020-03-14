import React from 'react';
import PropTypes from 'prop-types';
import Stage from './Stage';

const Display = ({ gameOver, text }) => <div>{text}</div>;

Stage.propTypes = {
  text: PropTypes.string,
  gameOver: PropTypes.func,
};

export default Display;
