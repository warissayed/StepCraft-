import React from "react";

import "./product.css";

function product({ result }) {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
}

export default product;
