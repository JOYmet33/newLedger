import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<div>여기는 DETAIL</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
