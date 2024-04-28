import { useMyContext } from "../../Context";

const HouseholdSummary = () => {
  const { members } = useMyContext();
  let sum = 0;
  members.map((member) => {
    sum += member.netto;
  });
  return (
    <table>
      <tbody>
        {members.map((member) => (
          <tr>
            <td>{member.name}</td>
            <td>{member.netto}</td>
          </tr>
        ))}
        <tr>
          <td>Összesen</td>
          <td>
            {Intl.NumberFormat("hu-HU", {
              style: "currency",
              currency: "HUF",
              maximumSignificantDigits: 6,
            }).format(sum)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default HouseholdSummary;
