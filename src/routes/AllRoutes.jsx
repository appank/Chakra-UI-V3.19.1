import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

import Product from "../pages/Product";
import Home from "../home/Home";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AllRoutes;