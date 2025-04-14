import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserData(employees);
    setAdmin(admin);
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData, admin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
