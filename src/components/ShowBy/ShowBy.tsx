import React, { useState } from "react";
import classes from "./showBy.module.css";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

interface RadioOption {
  value: string;
}

export const ShowBy: React.FC = () => {
  const [radioValue, setRadioValue] = useState<string>("10");
  const radios: RadioOption[] = [
    { value: "10" },
    { value: "20" },
    { value: "50" },
  ];
  const handleBtnLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setRadioValue(value);
  };
  return (
    <div className={classes.container}>
      <span>показать по:</span>
      <ButtonGroup className={classes.btns}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            className={`${classes.btn} ${classes["btn-primary"]}`}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={handleBtnLimit}
          >
            {radio.value}
          </ToggleButton>
        ))}
      </ButtonGroup>
      
    </div>
  );
};
