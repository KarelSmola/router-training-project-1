import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Fragment>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/p1">Product 1</Link>
        </li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </Fragment>
  );
};

export default Products;
