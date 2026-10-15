import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Stroy from "./pages/Story.jsx";
import Menu from "./pages/Menu.jsx";
import Store from "./pages/Store.jsx";
import Layout from "./pages/layout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/story" element={<Stroy />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/store" element={<Store />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
