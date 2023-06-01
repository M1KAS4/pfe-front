import React, { useState } from "react";
import Map2 from "../components/Map2";
import Sidebar from "../components/Sidebar";
import add from "../assets/css/Addproduct.module.css";
function Addproduct() {
  const [name_p, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDesc] = useState("");
  const [category, setCategory] = useState("");
  function submit() {}
  return (
    <>
      <div className={add.container}>
        <Sidebar />
        <form className={add.form_container}>
          <h1 className={add.title}>Add Product</h1>
          <input
            className={add.form_input}
            type="text"
            name="name_p"
            placeholder="Product name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <input
            className={add.form_input}
            type="number"
            name="price"
            placeholder="Price per Kg"
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <br />
          <input
            className={add.form_input}
            type="number"
            name="quantity"
            placeholder="Quantity per Kg"
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
          <br />
          <label className={add.label} for="category">
            Select a category:{" "}
          </label>
          <select
            className={add.select_menu}
            placeholder="select"
            id="category"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="plastic">Plastic</option>
            <option value="Glass">Glass</option>
            <option value="metal">Metal</option>
            <option value="Paper">Paper</option>
            <option value="Cardboard">Cardboard</option>
            <option value="Electronics">Electronics</option>
          </select>
          <br />
          <input
            className={add.form_input}
            type="text"
            name="description"
            placeholder="You can add a description of your product here"
            onChange={(e) => setDesc(e.target.value)}
          ></input>
          <br />
          <div className={add.highlight}></div>

          <Map2 />
          <button className={add.btn_submit} type="button" onClick={submit}>
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Addproduct;
