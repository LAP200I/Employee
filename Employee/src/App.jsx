import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "@fontsource/inter";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import ListEmployeePage from "./pages/ListEmployee/ListEmployeePage";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./context/AuthContext";
import AddPage from "./pages/AddEmployee/AddPage";
import Home from "./pages/Home/Home";
import EditPage from "./pages/UpdateEmployee/EditPage";
import ViewDetailPage from "./pages/ViewDetail/ViewDetailPage";

function App() {
  const { user } = useAuth();
  return (
    <>
      <AuthContextProvider>
        <ToastContainer />
        <Provider store={Store}>
          <Router>
            <Routes>
              <Route path="/" exact element={<Home />} />
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
