import { useMyContext } from "../../Context";
import { Button } from "@mui/material";

const FamilyMemberTabs = () => {
  const { members, addFamilyMember, saveName, saveBrutto } = useMyContext();

  const loadFamilyMember = (e) => {
    members.map((member) => {
      if (member.name === e.target.id) {
        saveName(member.name);
        saveBrutto(member.brutto);
      }
    });
  };

  return (
    <>
      <Button variant="standard" onClick={addFamilyMember}>
        +
      </Button>
      <ul>
        {members.map((member) => (
          <li key={member.name}>
            <Button
              variant="standard"
              onClick={loadFamilyMember}
              id={member.name}
            >
              {member.name}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FamilyMemberTabs;
