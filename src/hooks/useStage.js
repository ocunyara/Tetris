import { useState } from 'react';

import { createStage } from '../gameHalper';

export const useStage = () => {
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
};
