import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import Header from "../component/Header/Header";
import ButtonControl from "../component/Button/ButtonControl";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicLayout({ children }) {
  const { user } = useAuth();
  //if user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <ButtonControl />
        {children}
        <Outlet />
      </ThemeProvider>
    </>
  );
}
