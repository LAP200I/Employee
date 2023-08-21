import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "../src/styles/theme";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <AuthContextProvider>
      <ToastContainer />
      <Provider store={Store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
