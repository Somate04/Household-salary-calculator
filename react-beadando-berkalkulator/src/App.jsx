import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";
import { useAuth } from "./authContext";

function App() {
  const {
    calculate,
    netto,
    isSzja25,
    szja25Discount,
    isPersonal,
    personalDiscount,
    isNewlyWed,
    newlyWedDiscount,
  } = useAuth();

  return (
    <div>
      <h1>Bérkalkulátor alkalmazás</h1>
      <HouseholdSalaryCalculator
        calculate={calculate}
        isSzja25={isSzja25}
        szja25Discount={szja25Discount}
        isPersonal={isPersonal}
        personalDiscount={personalDiscount}
        isNewlyWed={isNewlyWed}
        newlyWedDiscount={newlyWedDiscount}
      />
      {netto}
    </div>
  );
}

export default App;
