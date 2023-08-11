import LoginModel from "../../component/Login/LoginModel";
import Header from "../../component/Header/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/theme";
import "./Home.css";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <LoginModel />
      </ThemeProvider>
    </>
  );
}
