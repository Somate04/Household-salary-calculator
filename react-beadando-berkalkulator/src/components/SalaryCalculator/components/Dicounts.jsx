import { Switch, FormControlLabel, FormGroup, Button } from "@mui/material";
import { useState } from "react";
import DateInput from "./DateInput";
import { useMyContext } from "../../../Context";
import Modal from "react-modal";
import Entitled from "./Entitled";

Modal.setAppElement(root);

function Discounts() {
  const {
    isSzja25,
    isPersonal,
    isNewlyWed,
    modalIsOpen,
    setModal,
    closeModal,
    checkedNewlyWed,
    isCheckedNewlyWed,
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

  const openModal = () => {
    setModal(true);
  };

  return (
    <>
      <h2>Kedvezmények</h2>
      <FormGroup>
        <FormControlLabel
          control={<Switch onChange={HandleChange25} />}
          label="25 éven aluliak SZJA kedvezménye"
          id="szja25"
        />
        <FormControlLabel
          control={<Switch onChange={HandleChangePersonal} />}
          label="Személyi adókedvezmény"
          id="szemelyi"
        />
        <FormControlLabel
          control={<Switch onChange={HandleChangeNewlyWed} />}
          label="Friss házasok kedvezménye"
          id="szemelyi"
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
      </FormGroup>
    </>
  );
}
export default Discounts;
