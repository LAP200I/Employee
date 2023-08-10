import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Route = ({ element: Component, ...rest }) => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    } else {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Component />;
      }}
    ></Route>
  );
};
