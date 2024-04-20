import { Button } from "@mui/material";
import { useMyContext } from "../../../Context";
import { useState } from "react";

function DateInput() {
  const { closeModal, isNewlyWed, newlyWedDiscount } = useMyContext();
  const [value, setValue] = useState(null);

  const changeHandler = (e, newValue) => {
    const now = new Date();
    const month = now.getMonth() + 1;
    const diff = month - newValue.getMonth();
    if (diff <= 24) {
      setValue(newValue);
      isNewlyWed(true);
    } else {
      isNewlyWed(false);
    }
  };

  return (
    <>
      <input
        type="date"
        label="Házasságkötés dátuma"
        value={value}
        onChange={changeHandler}
      />
      <Button onClick={closeModal}>Megerősít</Button>
    </>
  );
}

export default DateInput;
