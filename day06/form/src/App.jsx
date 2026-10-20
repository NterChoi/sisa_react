import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Sigup />}></Route>
      </Routes>
    </>
  );
}

export default App;
