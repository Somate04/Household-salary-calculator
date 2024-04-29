import { createContext, useContext, useState } from "react";

function useService() {
  const [brutto, setBrutto] = useState(0);
  const saveBrutto = (brutto) => setBrutto(brutto);

  const [netto, setNetto] = useState(null);
  const calculate = (netto) => setNetto(netto);

  const [name, setName] = useState("");
  const saveName = (name) => setName(name);

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

  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const SelectMember = (member) => setSelectedMember(member);

  const closeModal = () => {
    setIsOpen(false);
  };

  const addFamilyMember = () => {
    console.log(name);
    if (name !== null) {
      const index = members.findIndex((member) => member.name === name);
      if (index !== -1) {
        setMembers((prevMembers) => {
          const newMembers = [...prevMembers];
          newMembers[index] = {
            ...newMembers[index],
            ...{
              name: name,
              brutto: brutto,
              netto: netto,
              szja: szja25Discount,
              personalDiscount: personalDiscount,
              newlyWed: newlyWedDiscount,
              familyValue1: familyValue1,
              familyValue2: familyValue2,
            },
          };
          return newMembers;
        });
      } else {
        setMembers((prevMembers) => [
          ...prevMembers,
          {
            name: name,
            ...{
              brutto: brutto,
              netto: netto,
              szja: szja25Discount,
              personalDiscount: personalDiscount,
              newlyWed: newlyWedDiscount,
              familyValue1: familyValue1,
              familyValue2: familyValue2,
            },
          },
        ]);
      }
    }
    console.log(members);
  };

  const Service = {
    netto,
    name,
    saveName,
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
    members,
    addFamilyMember,
    selectedMember,
    SelectMember,
    saveBrutto,
    brutto,
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
