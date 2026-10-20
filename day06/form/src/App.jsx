import { Routes, Route } from "react-router";
import "./App.css";
import Signup from "./Signup";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/register" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
