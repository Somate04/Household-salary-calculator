import { useMyContext } from "../../Context";
import { Button } from "@mui/material";

const FamilyMemberTabs = () => {
  const { members, addFamilyMember } = useMyContext();

  return (
    <>
      <Button variant="standard" onClick={addFamilyMember}>
        +
      </Button>
      <ul>
        {members.map((member) => (
          <li>{member.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FamilyMemberTabs;
