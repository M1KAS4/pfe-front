import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/app.css";
import Seller from "./pages/Seller";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Myproducts from "./pages/Myproducts";
import Addproduct from "./pages/Addproduct";
import Productshistory from "./pages/Productshistory";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/my-products" element={<Myproducts />} />
        <Route path="/add-product" element={<Addproduct />} />
        <Route path="/products-history" element={<Productshistory />} />
      </Routes>
    </>
  );
}

export default App;
