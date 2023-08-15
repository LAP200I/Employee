import React, { useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = React.createContext({});
export const useAuth = () => useContext(AuthContext);
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
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
    //
    () => ({
      user,
      setUser: (newUser) => {
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
      },
    }),
    [user]
  );
  // const [user, setUser] = useLocalStorage("user", null);
  // const navigate = useNavigate();

  // // call this function when you want to authenticate the user
  // const login = async (data) => {
  //   setUser(data);
  //   navigate("/employee");
  // };

  // // call this function to sign out logged in user
  // const logout = () => {
  //   setUser(null);
  //   navigate("/", { replace: true });
  // };

  // const value = useMemo(
  //   () => ({
  //     user,
  //     login,
  //     logout,
  //   }),
  //   [user]
  // );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
