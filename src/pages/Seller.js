import React from "react";
import Sidebar from "../components/Sidebar";
// import "../assets/css/app.css";
import { Route, Routes } from "react-router-dom";
import Addproduct from "./Addproduct";
import Productshistory from "./Productshistory";
import Myproducts from "./Myproducts";
function Seller() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/seller" element={<Seller />} />
        <Route path="/my-products" element={<Myproducts />} />
        <Route path="/add-product" element={<Addproduct />} />
        <Route path="/products-history" element={<Productshistory />} />
      </Routes>
    </>
  );
}

export default Seller;
