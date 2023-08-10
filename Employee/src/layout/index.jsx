import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

export default function PublicLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
