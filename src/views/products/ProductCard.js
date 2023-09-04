import { Skeleton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Spinner } from "reactstrap";

const ProductCard = ({ image = "", title = "", price = "", id = "" }) => {
  const navigateTo = useNavigate();
  const { isLoading } = useSelector((state) => state.products);
  return (
    <div
      onClick={() => navigateTo(`/product/${id}`)}
      className="product-card product-card-height"
    >
      {isLoading ? (
        <Skeleton variant="rectangular" height="20.5rem" />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ProductCard;
