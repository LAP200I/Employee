import React, { useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = React.createContext({});

export const useAuth = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  // if the user does not login, the user can not access the ListEmployeePage
  // * if the user login, the user can access the ListEmployeePage

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser: (newUser) => {
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
      },
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
