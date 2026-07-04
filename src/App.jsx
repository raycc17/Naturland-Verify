import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Verify from "./pages/Verify";
import Admin from "./pages/Admin";
import Products from "./pages/Products";

export default function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/verify" element={<Verify />} />

      <Route path="/admin" element={<Admin />} />

      <Route path="/products" element={<Products />} />

    </Routes>

  );

}
