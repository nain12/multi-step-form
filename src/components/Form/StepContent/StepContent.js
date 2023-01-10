import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import styles from './StepContent.module.scss';

const StepContent = ({ step }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log('Form Data', formData);
  };

  const getHeadingContent = (step) => {
    if (step == 1) {
      return 'Personal info';
    }
  };

  const getSubHeadingContent = (step) => {
    if (step == 1) {
      return 'Please provide your name, email address and phone number.';
    }
  };

  return (
    <div className={styles.Container}>
      <h1 className={styles.Heading}>{getHeadingContent(step)}</h1>
      <h2 className={styles.SubHeading}>{getSubHeadingContent(step)}</h2>

      <form onSubmit={onFormSubmit} autoComplete="off">
        {step == 1 ? (
          <>
            <Input
              required={true}
              label="Name"
              placeholder="e.g. Stephen King"
            />
            <Input
              required={true}
              label="Email address"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
            />
            <Input
              required={true}
              type="tel"
              label="Phone number"
              placeholder="e.g. +1 234 567 890"
            />
            <Button type="Next" label="Next Step" />
          </>
        ) : null}
      </form>
    </div>
  );
};
export default StepContent;
