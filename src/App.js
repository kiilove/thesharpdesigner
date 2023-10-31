import "./App.css";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CustomerList from "./pages/CustomerList";

import CustomerNew from "./pages/CustomerNew";
import AntdTest from "./pages/AntdTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Main children={<AntdTest />} />} />
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
