import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home/Home";
import ListEmployeePage from "./pages/ListEmployee/ListEmployeePage";
import ViewDetailPage from "./pages/ViewDetail/ViewDetailPage";
import AddPage from "./pages/AddEmployee/AddPage";
import EditPage from "./pages/UpdateEmployee/EditPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/inter";
import "./App.css";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ToastContainer />
        <Provider store={Store}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/employee" element={<ListEmployeePage />} />
              <Route exact path="/employee/edit/:id" element={<EditPage />} />
              <Route exact path="/employee/add" element={<AddPage />} />
              <Route exact path="/employee/:id" element={<ViewDetailPage />} />
            </Routes>
          </Router>
        </Provider>
      </AuthContextProvider>
    </>
  );
}

export default App;
