import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import PropTypes from "prop-types";

const HouseholdSalaryCalculator = () => {
  return (
    <>
      <header>
        <FamilyMemberTabs />
      </header>
      <main>
        <SalaryCalculator />
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
