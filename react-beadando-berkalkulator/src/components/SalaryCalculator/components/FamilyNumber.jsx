import { Button } from "@mui/material";
import { useMyContext } from "../../../Context";
import { useEffect } from "react";
import styles from "./FamilyNumber.module.css";

function FamilyNumber() {
  const {
    checkedFamily,
    familyValue1,
    familyValue2,
    setFamilyValue1,
    setFamilyValue2,
  } = useMyContext();

  const changeValue1 = (increment) => {
    const newValue = familyValue1 + increment;
    if (newValue >= 0) {
      setFamilyValue1(newValue);
    }
  };
  const changeValue2 = (increment) => {
    const newValue = familyValue2 + increment;
    if (newValue >= 0 && newValue <= familyValue1 && newValue <= 3) {
      setFamilyValue2(newValue);
    }
  };

  useEffect(() => {
    if (familyValue1 < familyValue2) {
      setFamilyValue2(familyValue1);
    }
  }, [familyValue1]);

  return (
    <form style={{ display: checkedFamily ? "block" : "none" }}>
      <Button className={styles.input} onClick={() => changeValue1(1)}>
        +
      </Button>
      <p className={styles.input}>{familyValue1}</p>
      <Button className={styles.input} onClick={() => changeValue1(-1)}>
        -
      </Button>
      <p className={styles.input}>Eltartott, ebből kedvezményezett: </p>
      <Button className={styles.input} onClick={() => changeValue2(1)}>
        +
      </Button>
      <p className={styles.input}>{familyValue2}</p>
      <Button className={styles.input} onClick={() => changeValue2(-1)}>
        -
      </Button>
    </form>
  );
}
export default FamilyNumber;
