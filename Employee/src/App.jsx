import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ListPage from "./pages/ListEmployee/ListPage";
import DetailPage from "./pages/ViewDetail/DetailPage";
import AddPage from "./pages/AddEmployee/AddPage";
import EditPage from "./pages/UpdateEmployee/EditPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/employee" element={<ListPage />} />
        <Route exact path="/employee/edit/:id" element={<EditPage />} />
        <Route exact path="/employee/add" element={<AddPage />} />
        <Route exact path="/employee/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
