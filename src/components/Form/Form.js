import styles from './Form.module.scss';
import Sidebar from './Sidebar/Sidebar';
import StepContent from './StepContent/StepContent';

const Form = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <Sidebar />
        <StepContent step={1} />
      </div>
    </>
  );
};

export default Form;
