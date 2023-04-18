import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Product Detail</h1>
      {params.productId}
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </Fragment>
  );
};

export default ProductDetail;
