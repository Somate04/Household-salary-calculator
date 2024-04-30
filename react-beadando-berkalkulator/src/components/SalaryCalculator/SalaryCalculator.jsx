import Input from "./components/Input";
import Discounts from "./components/Dicounts";
import { useMyContext } from "../../Context";
import styles from "./components/SalaryCalculator.module.css";

const SalaryCalculator = () => {
  const { netto } = useMyContext();
  return (
    <div>
      <Input />
      <Discounts />
      <div className={styles.result}>
        <span>Számított nettó bér:</span>
        <br />
        <span className={styles.number}>
          {Intl.NumberFormat("hu-HU", {
            style: "currency",
            currency: "HUF",
            maximumSignificantDigits: 6,
          }).format(netto)}
        </span>
      </div>
    </div>
  );
};

export default SalaryCalculator;
