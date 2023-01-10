import { createContext } from 'react';

const ActiveStepContext = createContext({
  activeStep: 1,
  setActiveStep: () => {}
});

export default ActiveStepContext;
