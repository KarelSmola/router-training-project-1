import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Product detail</h1>
      {params.productId}
      <Link to=".." relative="path">
        Back
      </Link>
    </Fragment>
  );
};

export default ProductDetail;
