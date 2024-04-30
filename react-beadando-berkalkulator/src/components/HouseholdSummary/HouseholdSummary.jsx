import { useMyContext } from "../../Context";
import "./components/Summary.css";

const HouseholdSummary = () => {
  const { members } = useMyContext();
  let sum = 0;
  members.map((member) => {
    sum += member.netto;
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Családtag</th>
            <th>Nettó bér</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.name}>
              <td>{member.name}</td>
              <td>
                {Intl.NumberFormat("hu-HU", {
                  style: "currency",
                  currency: "HUF",
                  maximumSignificantDigits: 6,
                }).format(member.netto)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr key="Total">
            <td>Összesen</td>
            <td>
              {Intl.NumberFormat("hu-HU", {
                style: "currency",
                currency: "HUF",
                maximumSignificantDigits: 6,
              }).format(sum)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default HouseholdSummary;
