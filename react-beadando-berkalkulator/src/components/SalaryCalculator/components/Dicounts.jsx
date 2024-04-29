import { Switch, FormControlLabel, FormGroup, Button } from "@mui/material";
import { useState } from "react";
import DateInput from "./DateInput";
import { useMyContext } from "../../../Context";
import Modal from "react-modal";
import Entitled from "./Entitled";
import FamilyNumber from "./FamilyNumber";

Modal.setAppElement(root);

function Discounts() {
  const {
    isSzja25,
    szja25Discount,
    isPersonal,
    personalDiscount,
    isNewlyWed,
    newlyWedDiscount,
    modalIsOpen,
    setModal,
    closeModal,
    checkedNewlyWed,
    isCheckedNewlyWed,
    isCheckedFamily,
    checkedFamily,
  } = useMyContext();
  const [checked25, setChecked25] = useState(false);
  const [checkedPersonal, setCheckedPersonal] = useState(false);

  const HandleChange25 = (e, newValue) => {
    setChecked25(newValue);
    isSzja25(newValue);
  };

  const HandleChangePersonal = (e, newValue) => {
    setCheckedPersonal(newValue);
    isPersonal(newValue);
  };
  const HandleChangeNewlyWed = (e, newValue) => {
    isCheckedNewlyWed(newValue);
  };
  const HandleChangeFamily = (e, newValue) => {
    isCheckedFamily(newValue);
  };

  const openModal = () => {
    setModal(true);
  };

  return (
    <>
      <h2>Kedvezmények</h2>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch onChange={HandleChange25} checked={szja25Discount} />
          }
          label="25 éven aluliak SZJA kedvezménye"
          id="szja25"
        />
        <FormControlLabel
          control={
            <Switch
              onChange={HandleChangePersonal}
              checked={personalDiscount}
            />
          }
          label="Személyi adókedvezmény"
        />
        <FormControlLabel
          control={
            <Switch onChange={HandleChangeNewlyWed} checked={checkedNewlyWed} />
          }
          label="Friss házasok kedvezménye"
        />
        <Entitled />
        <Button
          onClick={openModal}
          style={{ display: checkedNewlyWed ? "block" : "none" }}
        >
          Dátum hozzáadása
        </Button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <DateInput />
        </Modal>
        <FormControlLabel
          control={
            <Switch onChange={HandleChangeFamily} checked={checkedFamily} />
          }
          label="Családi kedvezmény"
        />
        <FamilyNumber />
      </FormGroup>
    </>
  );
}
export default Discounts;
