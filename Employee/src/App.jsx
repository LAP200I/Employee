import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import "@fontsource/inter";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import ListEmployeePage from "./pages/ListEmployee/ListEmployeePage";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./context/AuthContext";
import UpdateEmployee from "./pages/UpdateEmployee/UpdateEmployee";
import AddPage from "./pages/AddEmployee/AddPage";
import Home from "./pages/Home/Home";
import UpdatePage from "./pages/UpdateEmployee/UpdatePage";
import { redirect } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Navigate } from "react-router-dom";

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

              {/* <Route
                path="/employee"
                element={
                  <ProtectedRoute>
                    <ListEmployeePage />
                  </ProtectedRoute>
                }
              /> */}
              <Route exact path="/employee/:id" element={<UpdatePage />} />
              <Route exact path="/employee/add" element={<AddPage />} />
            </Routes>
          </Router>
        </Provider>
      </AuthContextProvider>
    </>
  );
}

export default App;
