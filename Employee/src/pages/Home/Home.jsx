import LoginModel from "../../component/Login/LoginModel";
import Header from "../../component/Header/Header";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "../../styles/theme";
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
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            className="login-container"
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                margin: "auto",
              }}
            >
              {/* <Header /> */}
              <LoginModel handleOpenRegisterModal={handleOpenRegisterModal} />
              <RegisterModal
                open={openRegisterModal}
                onClose={handleCloseRegisterModal}
              />
            </Box>
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
      </ThemeProvider>
    </>
  );
}
