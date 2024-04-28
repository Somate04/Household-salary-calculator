import { useContext } from "react";
import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";
import { useMyContext } from "./Context";

function App() {
  const { netto } = useMyContext();

  return (
    <div>
      <h1>Bérkalkulátor alkalmazás</h1>
      <HouseholdSalaryCalculator />
      {Intl.NumberFormat("hu-HU", {
        style: "currency",
        currency: "HUF",
        maximumSignificantDigits: 6,
      }).format(netto)}
    </div>
  );
}

export default App;
