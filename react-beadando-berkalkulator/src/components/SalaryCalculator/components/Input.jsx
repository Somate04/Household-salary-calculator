import { TextField, Slider, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import PropTypes from "prop-types";

function Input({
  calculate,
  szja25Discount,
  personalDiscount,
  newlyWedDiscount,
}) {
  const familyNameRef = useRef(null);
  const bruttoRef = useRef(null);

  const [value, setValue] = useState(0);

  const HandleChange = (e) => {
    setValue(Number(e.target.value));

    //const name = familyNameRef.current.value;
    CalculateNetto(Number(e.target.value));
  };

  const HandleSlider = (e, newValue) => {
    setValue(newValue);
    CalculateNetto(newValue);
  };

  useEffect(() => {
    CalculateNetto(bruttoRef.current.value);
  }, [szja25Discount, personalDiscount, newlyWedDiscount]);

  const CalculateNetto = (newValue) => {
    const brutto = newValue;
    let netto;
    let nettoValue;
    let szjaTax = brutto * 0.15;
    let tb = brutto * 0.185;
    let taxSum = szjaTax + tb;
    if (szja25Discount) {
      let diff = brutto - 499952;
      if (diff > 0) {
        szjaTax = diff * 0.15;
        tb = brutto * 0.185;
        taxSum = szjaTax + tb;
        nettoValue = brutto - taxSum;
      } else {
        szjaTax = 0;
        taxSum = tb;
        nettoValue = brutto - taxSum;
      }
    } else {
      nettoValue = brutto - szjaTax - tb;
    }
    if (personalDiscount) {
      taxSum = szjaTax + tb;
      if (taxSum - 77300 > 0) {
        taxSum -= 77300;
      } else {
        taxSum = 0;
      }
      nettoValue = brutto - taxSum;
    }
    if (newlyWedDiscount) {
      nettoValue += 5000;
    }
    netto = Intl.NumberFormat("hu-HU", {
      style: "currency",
      currency: "HUF",
      maximumSignificantDigits: 6,
    }).format(nettoValue);

    calculate(netto);
  };

  const Minus5 = () => {
    setValue(value * 0.95);
    CalculateNetto(value * 0.95);
  };
  const Minus1 = () => {
    setValue(value * 0.99);
    CalculateNetto(value * 0.99);
  };
  const Plus1 = () => {
    setValue(value * 1.01);
    CalculateNetto(value * 1.01);
  };
  const Plus5 = () => {
    setValue(value * 1.05);
    CalculateNetto(value * 1.05);
  };

  return (
    <>
      <form>
        <TextField
          variant="standard"
          inputRef={familyNameRef}
          type="text"
          id="name"
          name="name"
          label="Családtag neve"
        />
        <p>Add meg a családtag nevét!</p>
        <br />
        <TextField
          variant="standard"
          inputRef={bruttoRef}
          value={value}
          type="number"
          id="brutto"
          name="brutto"
          onChange={HandleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">Ft</InputAdornment>,
          }}
          autoFocus
        />
        <br />
        <p>Add meg a bruttó béredet!</p>
        <Slider
          size="small"
          step={1000}
          onChange={HandleSlider}
          max={2000000}
          value={typeof value === "number" ? value : 0}
        />
        <Button variant="standard" onClick={Minus5}>
          -5%
        </Button>
        <Button variant="standard" onClick={Minus1}>
          -1%
        </Button>
        <Button variant="standard" onClick={Plus1}>
          +1%
        </Button>
        <Button variant="standard" onClick={Plus5}>
          +5%
        </Button>
      </form>
    </>
  );
}

Input.propTypes = {
  calculate: PropTypes.func,
};

export default Input;
