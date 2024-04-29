import { Slider, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useMyContext } from "../../../Context";
import TextInput from "./TextInput";

function Input() {
  const {
    calculate,
    netto,
    szja25Discount,
    personalDiscount,
    newlyWedDiscount,
    checkedNewlyWed,
    checkedFamily,
    familyValue1,
    familyValue2,
    members,
    saveName,
    name,
    saveBrutto,
    brutto,
  } = useMyContext();

  const bruttoRef = useRef(null);

  const HandleChange = (e) => {
    saveBrutto(Number(e.target.value));
    CalculateNetto(Number(e.target.value));
  };

  const HandleSlider = (e, newValue) => {
    saveBrutto(newValue);
    CalculateNetto(newValue);
  };

  useEffect(() => {
    CalculateNetto(bruttoRef.current.value);
  }, [
    szja25Discount,
    personalDiscount,
    newlyWedDiscount,
    checkedNewlyWed,
    checkedFamily,
    familyValue1,
    familyValue2,
    netto,
    brutto,
  ]);

  //mentés ellenőrzése
  useEffect(() => {
    console.log(members);
  }, [members]);

  const CalculateNetto = (newValue) => {
    const brutto = newValue;
    let netto;
    let nettoValue;
    let szjaTax = brutto * 0.15;
    let tb = brutto * 0.185;
    let taxSum = szjaTax + tb;
    let familyTaxDiscount;
    let newlyWed = 0;
    if (szja25Discount) {
      let diff = brutto - 499952;
      if (diff > 0) {
        szjaTax = diff * 0.15;
        tb = brutto * 0.185;
        taxSum = szjaTax + tb;
        //nettoValue = brutto - taxSum;
      } else {
        szjaTax = 0;
        taxSum = tb;
        //nettoValue = brutto - taxSum + newlyWed;
      }
    } else {
      //nettoValue = brutto - szjaTax - tb + newlyWed;
    }
    if (personalDiscount) {
      taxSum = szjaTax + tb;
      if (taxSum - 77300 > 0) {
        taxSum -= 77300;
      } else {
        taxSum = 0;
      }
      //nettoValue = brutto - taxSum + newlyWed;
    }
    if (newlyWedDiscount && checkedNewlyWed) {
      newlyWed = 5000;
      nettoValue += newlyWed;
    }
    if (checkedFamily) {
      if (familyValue2 === 0) {
        familyTaxDiscount = 0;
      } else if (familyValue2 === 1) {
        familyTaxDiscount = 10000 * familyValue1;
      } else if (familyValue2 === 2) {
        familyTaxDiscount = 20000 * familyValue1;
      } else if (familyValue2 === 3) {
        familyTaxDiscount = 33000 * familyValue1;
      }
      if (taxSum - familyTaxDiscount > 0) {
        taxSum -= familyTaxDiscount;
      } else {
        taxSum = 0;
      }
    }
    nettoValue = brutto - taxSum + newlyWed;
    netto = nettoValue;
    /*netto = Intl.NumberFormat("hu-HU", {
      style: "currency",
      currency: "HUF",
      maximumSignificantDigits: 6,
    }).format(nettoValue);*/

    calculate(netto);
  };

  const changeBrutto = (multiplier) => {
    const newValue = brutto * multiplier;
    saveBrutto(newValue);
    CalculateNetto(newValue);
  };
  const nameChange = (e) => {
    saveName(e.target.value);
  };

  return (
    <>
      <TextInput type={"text"} onChange={nameChange} value={name} />
      <p>Add meg a családtag nevét!</p>
      <br />
      <TextInput
        refValue={bruttoRef}
        type={"number"}
        value={brutto}
        onChange={HandleChange}
      />
      <br />
      <p>Add meg a bruttó béredet!</p>
      <Slider
        size="small"
        step={1000}
        onChange={HandleSlider}
        max={2000000}
        value={typeof brutto === "number" ? brutto : 0}
        color="default"
      />
      <Button
        variant="contained"
        onClick={() => changeBrutto(0.95)}
        color="error"
        sx={{ m: 1 }}
      >
        -5%
      </Button>
      <Button
        variant="contained"
        onClick={() => changeBrutto(0.99)}
        color="error"
        sx={{ m: 1 }}
      >
        -1%
      </Button>
      <Button
        variant="contained"
        onClick={() => changeBrutto(1.01)}
        color="success"
        sx={{ m: 1 }}
      >
        +1%
      </Button>
      <Button
        variant="contained"
        onClick={() => changeBrutto(1.05)}
        color="success"
        sx={{ m: 1 }}
      >
        +5%
      </Button>
    </>
  );
}

export default Input;
