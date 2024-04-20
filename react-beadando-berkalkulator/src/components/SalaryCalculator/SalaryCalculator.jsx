import Input from "./components/Input";
import PropTypes from "prop-types";
import Discounts from "./components/Dicounts";

const SalaryCalculator = ({
  calculate,
  isSzja25,
  szja25Discount,
  isPersonal,
  personalDiscount,
  isNewlyWed,
  newlyWedDiscount,
}) => {
  return (
    <div>
      <Input
        calculate={calculate}
        szja25Discount={szja25Discount}
        personalDiscount={personalDiscount}
        newlyWedDiscount={newlyWedDiscount}
      />
      <Discounts
        isSzja25={isSzja25}
        isPersonal={isPersonal}
        isNewlyWed={isNewlyWed}
      />
    </div>
  );
};

SalaryCalculator.propTypes = {
  calculate: PropTypes.func,
};

export default SalaryCalculator;
