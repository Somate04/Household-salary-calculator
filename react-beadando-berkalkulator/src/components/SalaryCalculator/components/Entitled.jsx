import { useMyContext } from "../../../Context";
import styles from "./Entitled.module.css";

function Entitled() {
  const { checkedNewlyWed, newlyWedDiscount } = useMyContext();
  const text = newlyWedDiscount ? "Jogosult" : "Nem jogosult";
  const style = newlyWedDiscount ? styles.entitled : styles.notEntitled;

  return (
    <p
      className={style}
      style={{ display: checkedNewlyWed ? "block" : "none" }}
    >
      {text}
    </p>
  );
}

export default Entitled;
