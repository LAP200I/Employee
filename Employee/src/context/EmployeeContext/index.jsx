import React, { useContext, useState } from "react";

export const EmployeeContext = React.createContext({});
export const useEmployee = () => useContext(EmployeeContext);

export function EmployeeContextProvider({ children }) {
  const [employee, setEmployee] = useState([]);
  const [employeeId, setEmployeeId] = useState(null);

  const value = {};

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}
