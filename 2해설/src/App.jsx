import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>여기는 HOME</div>} />
          <Route path="/detail" element={<div>여기는 DETAIL</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
