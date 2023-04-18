import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const ProductsList = () => {
  const param = useParams();

  return (
    <Fragment>
      <h1>Product detail</h1>
      {param}
    </Fragment>
  );
};

export default ProductsList;
