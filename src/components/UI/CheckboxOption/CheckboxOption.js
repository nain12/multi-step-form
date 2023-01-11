import { useState, useEffect, useCallback } from 'react';
import styles from './CheckboxOption.module.scss';

const CheckboxOption = ({
  option,
  selectedAddOns = [],
  setSelectedAddOns = () => {}
}) => {
  const { title = '', description = '', price = 0 } = option;
  const [isChecked, setIsChecked] = useState(false);

  const onChangeHandler = () => {
    setIsChecked(!isChecked);
  };

  const updateSelectedOptions = useCallback(() => {
    console.log('Selected Addons', selectedAddOns);
    const toggledOption = { title, description, price };
    if (isChecked) {
      setSelectedAddOns([...selectedAddOns, toggledOption]);
    } else {
      if (selectedAddOns.length == 0) {
        return;
      }

      setSelectedAddOns(
        selectedAddOns.filter(
          (options) => options.title !== toggledOption.title
        )
      );
    }
    console.log('Selected Options', selectedAddOns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  useEffect(() => {
    console.log('Checked', isChecked);
    updateSelectedOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  const isOptionSelected =
    selectedAddOns.findIndex((selectedAddOn) => selectedAddOn.title == title) >
    -1;

  return (
    <div
      className={
        isOptionSelected
          ? `${styles.ListItem} ${styles.Active}`
          : styles.ListItem
      }
    >
      <div className={styles.Option}>
        <input
          className={styles.Checkbox}
          checked={isOptionSelected}
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
      <span className={styles.Price}>+{price}/mo</span>
    </div>
  );
};

export default CheckboxOption;
