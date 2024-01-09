import React from "react";
import "./Sidebar.css";
import Category from "./category/Category";
import Color from "./Colors/Color";
import Price from "./Price/Price";

function SideBar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>StepCraft🛒</h1>

          <p>Step into Style</p>
        </div>
        <Category handleChange={handleChange} />
        <Color handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </>
  );
}

export default SideBar;
