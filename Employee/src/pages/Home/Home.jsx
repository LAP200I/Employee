import LoginModel from "../../component/Login/LoginModel";
import Header from "../../component/Header/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../styles/theme";
import "./Home.css";
import { RegisterModal } from "../../component/Register/RegisterModel";
import { useState } from "react";

export default function Home() {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const handleOpenRegisterModal = () => {
    setOpenRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setOpenRegisterModal(false);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <LoginModel handleOpenRegisterModal={handleOpenRegisterModal} />
        <RegisterModal
          open={openRegisterModal}
          onClose={handleCloseRegisterModal}
        />
      </ThemeProvider>
    </>
  );
}
