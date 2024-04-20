import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";
import { useAuth } from "./authContext";

function App() {
  const { netto } = useAuth();

  return (
    <div>
      <h1>Bérkalkulátor alkalmazás</h1>
      <HouseholdSalaryCalculator />
      {netto}
    </div>
  );
}

export default App;
