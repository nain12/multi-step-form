import styles from './CheckboxOptions.module.scss';
import CheckboxOption from '../CheckboxOption/CheckboxOption';

const CheckboxOptions = ({
  options = [],
  selectedAddOns = [],
  setSelectedAddOns = () => {},
  activePlanDuration = ''
}) => {
  return (
    <ul className={styles.Container}>
      {options.map((option) => {
        return (
          <li key={option.title}>
            <CheckboxOption
              option={option}
              selectedAddOns={selectedAddOns}
              setSelectedAddOns={setSelectedAddOns}
              activePlanDuration={activePlanDuration}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CheckboxOptions;
