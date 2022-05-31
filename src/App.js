import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import FormIncident from "./pages/Form-Request/FormRequest";
import TableIncident from "./pages/Table-Request/TableRequest";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Dashboard />}></Route>
        <Route path="/form-incident" exact element={<FormIncident />}></Route>
        <Route path="/table-incident" exact element={<TableIncident />}></Route>
      </Routes>
    </div>
  );
}

export default App;

