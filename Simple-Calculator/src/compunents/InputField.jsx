import styles from "./InputField.module.css";

const InputField = ({displayValue}) => {
  return <input className={styles.inputField}  value={displayValue} readOnly/>;
};

export default InputField;
