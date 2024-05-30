import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./router/Home";
import Detail from "./router/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
