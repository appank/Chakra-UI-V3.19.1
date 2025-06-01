import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

import Product from "../pages/Product";
import Layout from "@/widget/Layout";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AllRoutes;