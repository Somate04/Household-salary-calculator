import { useMyContext } from "../../Context";
import { Button } from "@mui/material";

const FamilyMemberTabs = () => {
  const {
    members,
    addFamilyMember,
    saveName,
    saveBrutto,
    isSzja25,
    isPersonal,
    isCheckedNewlyWed,
    isNewlyWed,
    setFamilyValue1,
    setFamilyValue2,
    isCheckedFamily,
    deleteFamilyMember,
  } = useMyContext();

  const loadFamilyMember = (e) => {
    members.map((member) => {
      if (member.name === e.target.id) {
        saveName(member.name);
        saveBrutto(member.brutto);
        isSzja25(member.szja);
        isPersonal(member.personalDiscount);
        isCheckedNewlyWed(member.checkedNewlyWed);
        isNewlyWed(member.newlyWed);
        isCheckedFamily(member.checkedFamily);
        setFamilyValue1(member.familyValue1);
        setFamilyValue2(member.familyValue2);
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
      <Button variant="standard" onClick={deleteFamilyMember}>
        Delete
      </Button>
    </>
  );
};

export default FamilyMemberTabs;
