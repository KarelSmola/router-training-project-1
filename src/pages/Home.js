import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <Fragment>
      <h1>Home page</h1>
      <p>
        Link to <Link to="/products">products</Link>
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </Fragment>
  );
};

export default Home;
