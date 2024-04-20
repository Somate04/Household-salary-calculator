import { createContext, useContext, useState } from "react";

function useAuthService() {
  const [netto, setNetto] = useState(null);
  const calculate = (netto) => setNetto(netto);

  const [szja25Discount, setSzja25Discount] = useState(false);
  const isSzja25 = (b) => setSzja25Discount(b);

  const [personalDiscount, setPersonalDiscount] = useState(false);
  const isPersonal = (b) => setPersonalDiscount(b);

  const [newlyWedDiscount, setNewlyWedDiscount] = useState(false);
  const isNewlyWed = (b) => setNewlyWedDiscount(b);

  const authService = {
    netto,
    calculate,
    isSzja25,
    szja25Discount,
    isPersonal,
    personalDiscount,
    isNewlyWed,
    newlyWedDiscount,
  };

  return authService;
}

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const authService = useAuthService();

  return (
    <AuthContext.Provider value={authService}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No auth context");
  }
  return context;
};
