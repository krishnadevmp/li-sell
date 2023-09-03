import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const ProductCard = ({ image, title, description, price, id }) => {
  const navigateTo = useNavigate();
  return (
    <div
      onClick={() => navigateTo(`/product/${id}`)}
      className="product-card product-card-height"
    >
      <div className="product-card-img">
        <img alt="Card image cap" src={image} width="100%" height="100%" />
      </div>
      <div className="product-card-body">
        <div>
          <div>
            <b>{title}</b>
          </div>
        </div>
        <div className="product-card-button-container">
          <div className="">
            <b>AED:</b>
            <div>{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
