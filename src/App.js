import "./App.css";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CustomerList from "./pages/CustomerList";

import CustomerNew from "./pages/CustomerNew";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/customerlist"
          element={<Main children={<CustomerList />} />}
        />
        <Route
          path="/customernew"
          element={<Main children={<CustomerNew />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
