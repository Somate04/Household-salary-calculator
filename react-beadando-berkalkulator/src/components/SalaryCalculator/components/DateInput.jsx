import { Button, TextField, colors } from "@mui/material";
import { useMyContext } from "../../../Context";
import { useState, useRef } from "react";
import { grey } from "@mui/material/colors";

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
    <div>
      <p style={{ color: "grey", paddingBottom: 5 }}>
        A kedvezmény először a házasságkötés követő hónapra vehető igénybe és a
        házassági életközösség allat legfeljebb 24 hónapon keresztül jár.
      </p>
      <h3>Add meg a házasságkötés dátumát:</h3>
      <TextField
        variant="standard"
        type="date"
        inputRef={dateRef}
        onChange={changeHandler}
        helperText="Például: 2000/10/25"
        style={{ marginBottom: 10, marginTop: 10 }}
      />
      <br />
      <div
        style={{ backgroundColor: "rgb(46, 125, 50)", width: "fit-content" }}
      >
        <Button onClick={closeModal} variant="contained" color="success">
          Mentés
        </Button>
      </div>
    </div>
  );
}

export default DateInput;
