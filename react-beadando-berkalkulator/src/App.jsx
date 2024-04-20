import { useContext } from "react";
import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";
import { useMyContext } from "./Context";

function App() {
  const { netto } = useMyContext();

  return (
    <div>
      <h1>Bérkalkulátor alkalmazás</h1>
      <HouseholdSalaryCalculator />
      {netto}
    </div>
  );
}

export default App;
