import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const ProductCard = ({ image, title, description, price, id }) => {
  return (
    <div className="product-card product-card-height">
      <div className="product-card-img">
        <img alt="Card image cap" src={image} width="100%" height="100%" />
      </div>
      <div className="product-card-body">
        <div>
          <h5>{title}</h5>
        </div>
        <div className="product-card-body-text">{description}</div>
        <div className="product-card-button-container">
          <div className="">
            <b>AED:</b>
            <div>{price}</div>
          </div>
          <Link to={`/product/${id}`}>
            <Button color="primary">View</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
