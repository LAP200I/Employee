import React, { useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = React.createContext({});
export const useAuth = () => useContext(AuthContext);
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

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
