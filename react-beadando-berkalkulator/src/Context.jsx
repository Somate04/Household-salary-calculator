import { createContext, useContext, useState } from "react";

function useService() {
  const [netto, setNetto] = useState(null);
  const calculate = (netto) => setNetto(netto);

  const [szja25Discount, setSzja25Discount] = useState(false);
  const isSzja25 = (b) => setSzja25Discount(b);

  const [personalDiscount, setPersonalDiscount] = useState(false);
  const isPersonal = (b) => setPersonalDiscount(b);

  const [newlyWedDiscount, setNewlyWedDiscount] = useState(false);
  const isNewlyWed = (b) => setNewlyWedDiscount(b);

  const [checkedNewlyWed, setCheckedNewlyWed] = useState(false);
  const isCheckedNewlyWed = (b) => setCheckedNewlyWed(b);

  const [checkedFamily, setCheckedFamily] = useState(false);
  const isCheckedFamily = (b) => setCheckedFamily(b);

  const [modalIsOpen, setIsOpen] = useState(false);
  const setModal = (b) => setIsOpen(b);

  const [familyValue1, setValue1] = useState(0);
  const setFamilyValue1 = (b) => setValue1(b);
  const [familyValue2, setValue2] = useState(0);
  const setFamilyValue2 = (b) => setValue2(b);

  const closeModal = () => {
    setIsOpen(false);
  };

  const Service = {
    netto,
    calculate,
    isSzja25,
    szja25Discount,
    isPersonal,
    personalDiscount,
    isNewlyWed,
    newlyWedDiscount,
    modalIsOpen,
    closeModal,
    setModal,
    checkedNewlyWed,
    isCheckedNewlyWed,
    checkedFamily,
    isCheckedFamily,
    familyValue1,
    familyValue2,
    setFamilyValue1,
    setFamilyValue2,
  };

  return Service;
}

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const Service = useService();

  return <Context.Provider value={Service}>{children}</Context.Provider>;
};

export const useMyContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("No auth context");
  }
  return context;
};
