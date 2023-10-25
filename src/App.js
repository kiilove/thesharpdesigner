import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CustomerList from "./pages/CustomerList";

function App() {
  return (
    <div className="flex w-full h-full ">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Dashboard />} />
          <Route path="/customers" element={<CustomerList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
