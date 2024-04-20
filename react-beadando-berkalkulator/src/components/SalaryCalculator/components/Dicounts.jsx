import { Switch, FormControlLabel, FormGroup, Button } from "@mui/material";
import { useState } from "react";
import DateInput from "./DateInput";
import { useMyContext } from "../../../Context";

function Discounts() {
  const { isSzja25, isPersonal, isNewlyWed } = useMyContext();
  const [checked25, setChecked25] = useState(false);
  const [checkedPersonal, setCheckedPersonal] = useState(false);
  const [checkedNewlyWed, setCheckedNewlyWed] = useState(false);

  const HandleChange25 = (e, newValue) => {
    setChecked25(newValue);
    isSzja25(newValue);
  };

  const HandleChangePersonal = (e, newValue) => {
    setCheckedPersonal(newValue);
    isPersonal(newValue);
  };
  const HandleChangeNewlyWed = (e, newValue) => {
    setCheckedNewlyWed(newValue);
    isNewlyWed(newValue);
  };

  /*const [inputs, setInputs] = useState([]);
  const test = () => {
    const newDateInput = Date.now();
    setInputs((v) => [...v, newDateInput]);
  };*/

  return (
    <>
      <h2>Kedvezmények</h2>
      <FormGroup>
        <FormControlLabel
          control={<Switch onChange={HandleChange25} />}
          label="25 éven aluliak SZJA kedvezménye"
          id="szja25"
        />
        <FormControlLabel
          control={<Switch onChange={HandleChangePersonal} />}
          label="Személyi adókedvezmény"
          id="szemelyi"
        />
        <FormControlLabel
          control={<Switch onChange={HandleChangeNewlyWed} />}
          label="Friss házasok kedvezménye"
          id="szemelyi"
        />
        <Button>Dátum hozzáadása</Button>

        {/*inputs.map(() => (
          <DateInput />
        ))*/}
      </FormGroup>
    </>
  );
}
export default Discounts;
