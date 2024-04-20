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

  const Service = {
    netto,
    calculate,
    isSzja25,
    szja25Discount,
    isPersonal,
    personalDiscount,
    isNewlyWed,
    newlyWedDiscount,
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
