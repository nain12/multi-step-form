import { useContext, useState } from 'react';
import ActiveStepContext from '../../../context/ActiveStepContext';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import styles from './StepContent.module.scss';

const StepContent = () => {
  const { activeStep, setActiveStep } = useContext(ActiveStepContext);

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    name: undefined,
    email: undefined,
    phone: undefined
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const getHeadingContent = (step) => {
    if (step == 1) {
      return 'Personal info';
    } else if (step == 2) {
      return 'Select your plan';
    }
  };

  const getSubHeadingContent = (step) => {
    if (step == 1) {
      return 'Please provide your name, email address and phone number.';
    } else if (step == 2) {
      return 'You have the option of monthly or yearly billing.';
    }
  };

  const onClickHandler = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    } else {
      // programmatically route to thank you page
      setActiveStep(1);
    }
  };

  const validateInput = (fieldName, value) => {
    if (!value || !value.trim()) {
      setErrors({ ...errors, [fieldName]: true });
    } else {
      setErrors({ ...errors, [fieldName]: false });
    }
    setValues({ ...values, [fieldName]: value });
  };

  const getStepHeadings = (step) => {
    if (step == 1) {
      return (
        <>
          <h1 className={styles.Heading}>{getHeadingContent(1)}</h1>
          <h2 className={styles.SubHeading}>{getSubHeadingContent(1)}</h2>
        </>
      );
    } else if (step == 2) {
      return (
        <>
          <h1 className={styles.Heading}>{getHeadingContent(2)}</h1>
          <h2 className={styles.SubHeading}>{getSubHeadingContent(2)}</h2>
        </>
      );
    }
  };

  return (
    <div className={styles.Container}>
      {getStepHeadings(activeStep)}
      <form onSubmit={onFormSubmit} autoComplete="off">
        {activeStep == 1 ? (
          <>
            <Input
              label="Name"
              placeholder="e.g. Stephen King"
              value={values.name}
              onChange={(event) => validateInput('name', event.target.value)}
              isError={errors && errors.name}
              required
            />
            <Input
              label="Email address"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              value={values.email}
              onChange={(event) => validateInput('email', event.target.value)}
              isError={errors && errors.email}
              required
            />
            <Input
              type="tel"
              label="Phone number"
              placeholder="e.g. +1 234 567 890"
              value={values.phone}
              onChange={(event) => validateInput('phone', event.target.value)}
              required
              isError={errors && errors.phone}
            />
            <Button
              type="Next"
              label="Next Step"
              onClickHandler={onClickHandler}
              disabled={
                !values.name ||
                !values.name.trim() ||
                !values.email ||
                !values.email.trim() ||
                !values.phone ||
                !values.phone.trim() ||
                (errors && (errors.name || errors.email || errors.phone))
              }
            />
          </>
        ) : activeStep == 2 ? (
          <></>
        ) : activeStep == 3 ? (
          <></>
        ) : activeStep == 4 ? (
          <></>
        ) : null}
      </form>
    </div>
  );
};
export default StepContent;
