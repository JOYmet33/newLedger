import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home expenses={expenses} setExpenses={setExpenses} />}
          />
          <Route path="/detail" element={<div>여기는 DETAIL</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
