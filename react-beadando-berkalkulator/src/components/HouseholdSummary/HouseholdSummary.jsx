import { useMyContext } from "../../Context";

const HouseholdSummary = () => {
  const { members } = useMyContext();
  return (
    <table>
      <tbody>
        {members.map((member) => (
          <tr>
            <td>{member.name}</td>
            <td>{member.netto}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HouseholdSummary;
