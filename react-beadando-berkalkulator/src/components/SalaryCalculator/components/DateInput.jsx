import { Button, TextField } from "@mui/material";
import { useMyContext } from "../../../Context";
import { useState, useRef } from "react";

function DateInput() {
  const { closeModal, isNewlyWed, newlyWedDiscount } = useMyContext();
  const dateRef = useRef(null);

  const changeHandler = () => {
    const startDate = new Date(dateRef.current.value);
    const endDate = new Date(Date.now());
    const diff =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 -
      startDate.getMonth() +
      endDate.getMonth();
    if (diff <= 24) {
      isNewlyWed(true);
    } else {
      isNewlyWed(false);
    }
  };

  return (
    <>
      <p>Házasságkötés dátuma</p>
      <TextField
        variant="standard"
        type="date"
        inputRef={dateRef}
        onChange={changeHandler}
      />
      <Button onClick={closeModal}>Megerősít</Button>
    </>
  );
}

export default DateInput;
