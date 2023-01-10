import { useState } from 'react';
import Form from './components/Form/Form';
import ActiveStepContext from './context/ActiveStepContext';
import './App.scss';

function App() {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <ActiveStepContext.Provider value={{ activeStep, setActiveStep }}>
      <Form />
    </ActiveStepContext.Provider>
  );
}

export default App;
