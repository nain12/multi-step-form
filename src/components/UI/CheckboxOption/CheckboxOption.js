import { useState, useEffect, useCallback } from 'react';
import styles from './CheckboxOption.module.scss';

const CheckboxOption = ({
  option,
  selectedAddOns = [],
  setSelectedAddOns = () => {},
  activePlanDuration = ''
}) => {
  console.log('AddOns load', selectedAddOns);
  const { title = '', description = '', price = 0 } = option;
  const toggledOptionIndex = selectedAddOns.findIndex((selectedAddOn) => {
    return selectedAddOn.title == title;
  });
  const [isChecked, setIsChecked] = useState(toggledOptionIndex > -1);
  const priceSuffix = activePlanDuration == 'Monthly' ? '/mo' : '/yr';

  const onChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  const updateSelectedOptions = useCallback(() => {
    const toggledOption = { title, description, price };

    if (isChecked && toggledOptionIndex == -1) {
      setSelectedAddOns([...selectedAddOns, toggledOption]);
    } else if (!isChecked) {
      if (selectedAddOns.length == 0) {
        return;
      }

      const addOns = selectedAddOns.filter(
        (_, index) => index !== toggledOptionIndex
      );
      setSelectedAddOns(addOns);
    }
    console.log('Selected Options', selectedAddOns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  const updateSelectedAddOnPrices = (addOns) => {
    for (let addOn of addOns) {
      if (addOn.title == option.title) {
        addOn.price = option.price;
      }
    }
    return addOns;
  };

  useEffect(() => {
    setSelectedAddOns(updateSelectedAddOnPrices([...selectedAddOns]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateSelectedOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  return (
    <div
      className={
        toggledOptionIndex !== -1
          ? `${styles.ListItem} ${styles.Active}`
          : styles.ListItem
      }
    >
      <div className={styles.Option}>
        <input
          className={styles.Checkbox}
          checked={toggledOptionIndex !== -1}
          type="checkbox"
          value={title}
          id={title}
          onChange={onChangeHandler}
        />
        <div className={styles.Info}>
          <span className={styles.Title}>{title}</span>
          <span className={styles.Description}>{description}</span>
        </div>
      </div>
      <span className={styles.Price}>
        +{price}
        {priceSuffix}
      </span>
    </div>
  );
};

export default CheckboxOption;
