import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import PropTypes from "prop-types";

const HouseholdSalaryCalculator = ({
  calculate,
  isSzja25,
  szja25Discount,
  isPersonal,
  personalDiscount,
  isNewlyWed,
  newlyWedDiscount,
}) => {
  return (
    <>
      <header>
        <FamilyMemberTabs />
      </header>
      <main>
        <SalaryCalculator
          calculate={calculate}
          isSzja25={isSzja25}
          szja25Discount={szja25Discount}
          isPersonal={isPersonal}
          personalDiscount={personalDiscount}
          isNewlyWed={isNewlyWed}
          newlyWedDiscount={newlyWedDiscount}
        />
        <HouseholdSummary />
      </main>
    </>
  );
};

HouseholdSalaryCalculator.propTypes = {
  calculate: PropTypes.func,
  szja25: PropTypes.func,
  szja25Discount: PropTypes.bool,
};

export default HouseholdSalaryCalculator;
