import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Pages from "./pages/Pages";
import "@fontsource/inter";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import ListEmployeePage from "./pages/ListEmployee/ListEmployeePage";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();
  return (
    <>
      <AuthContextProvider>
        <ToastContainer />
        <Provider store={Store}>
          <Router>
            <Routes>
              <Route path="/" exact element={<Pages />} />
              <Route exact path="/employee" element={<ListEmployeePage />} />
              {/* {!user && <Route exact path="/" element={<Pages />} />}
              {user && (
                <Route exact path="/employee" element={<ListEmployeePage />} />
              )} */}
            </Routes>
          </Router>
        </Provider>
      </AuthContextProvider>
    </>
  );
}

export default App;
