import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({onButtonClick}) => {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "÷",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttons.map((button) => (
        <button className={styles.button} onClick={()=>onButtonClick(button)}>{button}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
