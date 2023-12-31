import { Skeleton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as IconDelete } from "../../assets/images/IconDelete.svg";
import { ReactComponent as IconEdit } from "../../assets/images/IconEdit.svg";
import {
  closeConfirmationModal,
  deleteProduct,
  setConfirmationModal,
} from "./ProductSlice";
import { prefixBase64 } from "../../Utils";

const ProductCard = ({
  imageData = "",
  title = "",
  price = "",
  id = "",
  postedBy = "",
}) => {
  const navigateTo = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const isUsersProduct =
    localStorage.getItem("userName") === postedBy &&
    pathname.includes("/products/user");
  const { isLoading } = useSelector((state) => state.products);
  return (
    <div
      onClick={() => {
        if (!isLoading) {
          navigateTo(`/product/${id}`);
        }
      }}
      className="product-card product-card-height"
    >
      {isLoading ? (
        <Skeleton variant="rectangular" height="20.5rem" />
      ) : (
        <>
          <div className="product-card-img">
            <img
              alt="Card image cap"
              src={prefixBase64(imageData)}
              width="100%"
              height="100%"
            />
          </div>
          <div className="product-card-body">
            <div>
              <div>
                <b>{title}</b>
              </div>
            </div>
            <div className="product-card-button-container">
              <div className="w-100">
                <div style={{ display: "flex" }}>
                  <b>AED:</b>
                  <div>{price}</div>
                </div>
                {isUsersProduct && (
                  <div>
                    <IconEdit
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateTo(`/edit/product/${id}`);
                      }}
                    />
                    <IconDelete
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(
                          setConfirmationModal({
                            isOpen: true,
                            confirmationMessage: `Are you sure, you want to delete this product, ${title}?`,
                            title: "Delete product",
                            onNo: () => dispatch(closeConfirmationModal()),
                            onYes: () => dispatch(deleteProduct(id)),
                          })
                        );
                      }}
                      className="product-card-delete"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
