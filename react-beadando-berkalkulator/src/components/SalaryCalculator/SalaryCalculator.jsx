import Input from "./components/Input";
import PropTypes from "prop-types";
import Discounts from "./components/Dicounts";

const SalaryCalculator = () => {
  return (
    <div>
      <Input />
      <Discounts />
    </div>
  );
};

SalaryCalculator.propTypes = {
  calculate: PropTypes.func,
};

export default SalaryCalculator;
