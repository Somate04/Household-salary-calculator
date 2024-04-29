import { useMyContext } from "../../Context";
import { Button, IconButton } from "@mui/material";
import styles from "./components/FamilyMemberTabs.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

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
    name,
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
      <ul>
        <li className={styles.tabs}>
          <IconButton
            variant="standard"
            onClick={addFamilyMember}
            disableRipple
          >
            <AddIcon />
          </IconButton>
        </li>
        {members.map((member) => (
          <li
            key={member.name}
            className={member.name === name ? styles.selected : styles.tabs}
          >
            <Button
              variant="standard"
              onClick={loadFamilyMember}
              id={member.name}
            >
              {member.name}
            </Button>
          </li>
        ))}

        <li className={styles.tabs}>
          <IconButton
            variant="standard"
            onClick={deleteFamilyMember}
            disableRipple
          >
            <DeleteIcon color="action" />
          </IconButton>
        </li>
      </ul>
    </>
  );
};

export default FamilyMemberTabs;
