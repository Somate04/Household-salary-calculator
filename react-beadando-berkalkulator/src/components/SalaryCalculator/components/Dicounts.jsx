import {
  Switch,
  FormControlLabel,
  FormGroup,
  Button,
  Backdrop,
} from "@mui/material";
import { useState } from "react";
import DateInput from "./DateInput";
import { useMyContext } from "../../../Context";
import Modal from "react-modal";
import Entitled from "./Entitled";
import styles from "./Entitled.module.css";
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

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "40%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgb(226, 232, 240)",
      borderRadius: "15px",
      borderColor: "rgb(226, 232, 240)",
    },
  };
  return (
    <>
      <h3>Kedvezmények</h3>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              onChange={HandleChange25}
              checked={szja25Discount}
              color="success"
            />
          }
          label="25 éven aluliak SZJA kedvezménye"
          id="szja25"
        />
        <FormControlLabel
          control={
            <Switch
              onChange={HandleChangePersonal}
              checked={personalDiscount}
              color="success"
            />
          }
          label="Személyi adókedvezmény"
        />
        <ul className={styles.list}>
          <li>
            <FormControlLabel
              control={
                <Switch
                  onChange={HandleChangeNewlyWed}
                  checked={checkedNewlyWed}
                  color="success"
                />
              }
              label="Friss házasok kedvezménye"
            />
          </li>
          <li>
            <Button
              onClick={openModal}
              style={{ display: checkedNewlyWed ? "block" : "none" }}
            >
              <span className={styles.button}>Dátum hozzáadása</span>
            </Button>
          </li>
          <li>
            <Entitled />
          </li>
        </ul>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
        >
          <DateInput />
        </Modal>
        <FormControlLabel
          control={
            <Switch
              onChange={HandleChangeFamily}
              checked={checkedFamily}
              color="success"
            />
          }
          label="Családi kedvezmény"
        />
        <FamilyNumber />
      </FormGroup>
    </>
  );
}
export default Discounts;
