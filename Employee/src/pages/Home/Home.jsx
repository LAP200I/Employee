import LoginModel from "../../component/Login/LoginModel";
import Header from "../../component/Header/Header";
import "./Home.css";
import { RegisterModal } from "../../component/Register/RegisterModel";
import { useState } from "react";
import { Grid, Paper, Box, CssBaseline } from "@mui/material";
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
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          backgroundColor="transparent"
          boxShadow="none"
          // className="login-container"
        >
          {/* <Header /> */}
          <LoginModel handleOpenRegisterModal={handleOpenRegisterModal} />
          <RegisterModal
            open={openRegisterModal}
            onClose={handleCloseRegisterModal}
          />
        </Grid>

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </>
  );
}
