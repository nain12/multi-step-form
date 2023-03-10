import { useContext, useState } from 'react';
import ActiveStepContext from '../../../context/ActiveStepContext';
import Button from '../../UI/Button/Button';
import CheckboxOptions from '../../UI/CheckboxOptions/CheckboxOptions';
import Input from '../../UI/Input/Input';
import Options from '../../UI/Options/Options';
import ToggleSwitch from '../../UI/ToggleSwitch/ToggleSwitch';
import Summary from '../Summary/Summary';
import ThankYou from '../ThankYou/ThankYou';
import styles from './StepContent.module.scss';

const StepContent = () => {
  const { activeStep, setActiveStep } = useContext(ActiveStepContext);
  const monthlyPlanOptions = [
    {
      title: 'Arcade',
      price: 9,
      monthsFree: 0
    },
    {
      title: 'Advanced',
      price: 12,
      monthsFree: 0
    },
    {
      title: 'Pro',
      price: 15,
      monthsFree: 0
    }
  ];

  const yearlyPlanOptions = [
    {
      title: 'Arcade',
      price: 90,
      monthsFree: 2
    },
    {
      title: 'Advanced',
      price: 120,
      monthsFree: 2
    },
    {
      title: 'Pro',
      price: 150,
      monthsFree: 2
    }
  ];

  const monthlyAddOns = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: 1
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: 2
    },
    {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: 2
    }
  ];

  const yearlyAddOns = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: 10
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: 20
    },
    {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: 20
    }
  ];

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

  const [activePlan, setActivePlan] = useState({
    title: undefined,
    price: undefined
  });

  const [planOptions, setPlanOptions] = useState(monthlyPlanOptions);

  const [activeDuration, setActiveDuration] = useState('Monthly');

  const [addOns, setAddOns] = useState(() =>
    activeDuration == 'Monthly' ? monthlyAddOns : yearlyAddOns
  );

  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const [showThankYouMessage, setShowThankYouMessage] = useState(undefined);

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const getHeadingContent = (step) => {
    if (step == 1) {
      return 'Personal info';
    } else if (step == 2) {
      return 'Select your plan';
    } else if (step == 3) {
      return 'Pick add-ons';
    } else if (step == 4) {
      return 'Finishing up';
    }
  };

  const getSubHeadingContent = (step) => {
    if (step == 1) {
      return 'Please provide your name, email address and phone number.';
    } else if (step == 2) {
      return 'You have the option of monthly or yearly billing.';
    } else if (step == 3) {
      return 'Add-ons help enhance your gaming experience.';
    } else if (step == 4) {
      return 'Double-check everything looks OK before confirming.';
    }
  };

  const onClickHandler = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(4);
      setShowThankYouMessage(true);
    }
  };

  const onBackClickHandler = () => {
    if (activeStep > 1 && activeStep <= 4) {
      setActiveStep(activeStep - 1);
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
    } else if (step == 3) {
      return (
        <>
          <h1 className={styles.Heading}>{getHeadingContent(3)}</h1>
          <h2 className={styles.SubHeading}>{getSubHeadingContent(3)}</h2>
        </>
      );
    } else if (step == 4) {
      return (
        <>
          <h1 className={styles.Heading}>{getHeadingContent(4)}</h1>
          <h2 className={styles.SubHeading}>{getSubHeadingContent(4)}</h2>
        </>
      );
    }
  };

  const updateActivePlanPrice = (planOptions) => {
    if (!activePlan) {
      return;
    }
    const toggledActivePlan = planOptions.find(
      (planOption) => planOption.title == activePlan.title
    );
    if (activePlan) {
      setActivePlan({
        title: activePlan.title,
        price: toggledActivePlan.price
      });
    }
  };

  const onDurationToggleHandler = () => {
    if (activeDuration == 'Monthly') {
      setActiveDuration('Yearly');
      setPlanOptions(yearlyPlanOptions);
      setAddOns(yearlyAddOns);
      updateActivePlanPrice(yearlyPlanOptions);
    } else {
      setActiveDuration('Monthly');
      setPlanOptions(monthlyPlanOptions);
      setAddOns(monthlyAddOns);
      updateActivePlanPrice(monthlyPlanOptions);
    }
  };

  return (
    <div className={styles.Container}>
      {!showThankYouMessage && getStepHeadings(activeStep)}
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
            <div className={styles.ButtonContainer}>
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
            </div>
          </>
        ) : activeStep == 2 ? (
          <>
            <Options
              activePlan={activePlan}
              setActivePlan={setActivePlan}
              options={planOptions}
            />
            <ToggleSwitch
              activeDuration={activeDuration}
              onToggleHandler={onDurationToggleHandler}
            />
            <div className={styles.ButtonContainer}>
              <Button
                type="Next"
                label="Next Step"
                disabled={activePlan && activePlan.title == undefined}
                onClickHandler={onClickHandler}
              />
              <Button
                type="Back"
                label="Go Back"
                onClickHandler={onBackClickHandler}
              />
            </div>
          </>
        ) : activeStep == 3 ? (
          <>
            <CheckboxOptions
              options={addOns}
              activePlanDuration={activeDuration}
              selectedAddOns={selectedAddOns}
              setSelectedAddOns={setSelectedAddOns}
            />
            <div className={styles.ButtonContainer}>
              <Button
                type="Next"
                label="Next Step"
                disabled={activePlan && activePlan.title == undefined}
                onClickHandler={onClickHandler}
              />
              <Button
                type="Back"
                label="Go Back"
                onClickHandler={onBackClickHandler}
              />
            </div>
          </>
        ) : activeStep == 4 ? (
          <>
            {showThankYouMessage ? (
              <>
                <ThankYou />
              </>
            ) : (
              <>
                <Summary
                  activePlan={activePlan}
                  activePlanDuration={activeDuration}
                  selectedAddOns={selectedAddOns}
                />
                <div className={styles.ButtonContainer}>
                  <Button
                    type="Confirm"
                    label="Confirm"
                    disabled={activePlan && activePlan.title == undefined}
                    onClickHandler={onClickHandler}
                  />
                  <Button
                    type="Back"
                    label="Go Back"
                    onClickHandler={onBackClickHandler}
                  />
                </div>
              </>
            )}
          </>
        ) : null}
      </form>
    </div>
  );
};
export default StepContent;
