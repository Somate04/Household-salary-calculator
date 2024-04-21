import { Button } from "@mui/material";
import { useMyContext } from "../../../Context";
import { useEffect, useState } from "react";
import styles from "./FamilyNumber.module.css";

function FamilyNumber() {
  const { checkedFamily } = useMyContext();
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const changeValue1 = (increment) => {
    const newValue = value1 + increment;
    if (newValue >= 0) {
      setValue1(newValue);
    }
  };
  const changeValue2 = (increment) => {
    const newValue = value2 + increment;
    if (newValue >= 0 && newValue <= value1 && newValue <= 3) {
      setValue2(newValue);
    }
  };

  useEffect(() => {
    if (value1 < value2) {
      setValue2(value1);
    }
  }, [value1]);

  return (
    <form style={{ display: checkedFamily ? "block" : "none" }}>
      <Button className={styles.input} onClick={() => changeValue1(1)}>
        +
      </Button>
      <p className={styles.input}>{value1}</p>
      <Button className={styles.input} onClick={() => changeValue1(-1)}>
        -
      </Button>
      <p className={styles.input}>Eltartott, ebből kedvezményezett: </p>
      <Button className={styles.input} onClick={() => changeValue2(1)}>
        +
      </Button>
      <p className={styles.input}>{value2}</p>
      <Button className={styles.input} onClick={() => changeValue2(-1)}>
        -
      </Button>
    </form>
  );
}
export default FamilyNumber;
