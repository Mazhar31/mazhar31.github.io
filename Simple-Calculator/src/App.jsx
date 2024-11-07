import InputField from "./compunents/InputField";
import ButtonContainer from "./compunents/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  const buttonHandler = (button) => {
    if(button === 'C'){
      setCalVal("")
    } else if(button === '='){
      setCalVal(eval(calVal))
    } else{
      setCalVal(calVal+button)
    }
  };

  return (
    <>
      <div className={styles.container}>
        <InputField displayValue={calVal} />
        <ButtonContainer onButtonClick={buttonHandler} />
      </div>
    </>
  );
}

export default App;
