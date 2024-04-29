import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import styles from "./HouseholdSalaryCalculator.module.css";

const HouseholdSalaryCalculator = () => {
  return (
    <>
      <header>
        <FamilyMemberTabs />
      </header>
      <main className={styles.twocolumns}>
        <SalaryCalculator />
        <HouseholdSummary />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
