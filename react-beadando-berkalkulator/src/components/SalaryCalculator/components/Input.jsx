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
  } = useMyContext();

  const familyNameRef = useRef(null);
  const bruttoRef = useRef(null);

  const [value, setValue] = useState(0);
  const [members, setMembers] = useState([]);

  const HandleChange = (e) => {
    setValue(Number(e.target.value));
    CalculateNetto(Number(e.target.value));
  };

  const HandleSlider = (e, newValue) => {
    setValue(newValue);
    CalculateNetto(newValue);
  };

  useEffect(() => {
    CalculateNetto(bruttoRef.current.value);
    const index = members.findIndex(
      (member) => member.name === familyNameRef.current.value
    );
    console.log(index);
    if (index !== -1) {
      setMembers((prevMembers) => {
        const newMembers = [...prevMembers];
        newMembers[index] = {
          ...newMembers[index],
          ...{
            name: familyNameRef.current.value,
            bruttor: bruttoRef.current.value,
            netto: netto,
          },
        };
        return newMembers;
      });
    } else {
      setMembers((prevMembers) => [
        ...prevMembers,
        {
          name: familyNameRef.current.value,
          ...{
            brutto: bruttoRef.current.value,
            netto: netto,
          },
        },
      ]);
    }
  }, [
    szja25Discount,
    personalDiscount,
    newlyWedDiscount,
    checkedNewlyWed,
    checkedFamily,
    familyValue1,
    familyValue2,
  ]);
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
    netto = Intl.NumberFormat("hu-HU", {
      style: "currency",
      currency: "HUF",
      maximumSignificantDigits: 6,
    }).format(nettoValue);

    calculate(netto);
  };

  const changeBrutto = (multiplier) => {
    const newValue = value * multiplier;
    setValue(newValue);
    CalculateNetto(newValue);
  };

  return (
    <>
      <TextInput
        refValue={familyNameRef}
        type={"text"}
        label={"Családtag neve"}
      />
      <p>Add meg a családtag nevét!</p>
      <br />
      <TextInput
        refValue={bruttoRef}
        type={"number"}
        value={value}
        onChange={HandleChange}
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
      <Button variant="standard" onClick={() => changeBrutto(0.95)}>
        -5%
      </Button>
      <Button variant="standard" onClick={() => changeBrutto(0.99)}>
        -1%
      </Button>
      <Button variant="standard" onClick={() => changeBrutto(1.01)}>
        +1%
      </Button>
      <Button variant="standard" onClick={() => changeBrutto(1.05)}>
        +5%
      </Button>
    </>
  );
}

export default Input;
