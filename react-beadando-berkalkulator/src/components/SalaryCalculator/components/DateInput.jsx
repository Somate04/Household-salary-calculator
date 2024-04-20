import { Button } from "@mui/material";
import { useMyContext } from "../../../Context";
import { DateField } from "@mui/x-date-pickers/DateField";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function DateInput() {
  const { closeModal, isNewlyWed, newlyWedDiscount } = useMyContext();
  const [value, setValue] = useState(null);

  const changeHandler = (e, newValue) => {
    const now = Dayjs();
    if (now.diff(value, "month") <= 24) {
      setValue(newValue);
      isNewlyWed(true);
    } else {
      isNewlyWed(false);
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField
          label="Házasságkötés dátuma"
          value={value}
          onChange={changeHandler}
          disableFuture
        />
      </LocalizationProvider>
      <Button onClick={closeModal}>Megerősít</Button>
    </>
  );
}

export default DateInput;
