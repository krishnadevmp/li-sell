import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UncontrolledCarousel } from "reactstrap";
import "./Products.css";
import { ReactComponent as IconEdit } from "../../assets/images/IconEdit.svg";
import { useEffect } from "react";
import { fetchProductsById } from "./ProductSlice";
import { ReactComponent as IconView } from "../../assets/images/IconView.svg";
import { prefixBase64 } from "../../Utils";
import { Skeleton } from "@mui/material";

const ProductDetails = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const { id: productId } = useParams();
  const { isLoading, currentProduct } = useSelector((state) => state.products);
  const { pathname } = useLocation();
  const { isLoggedIn } = useSelector((state) => state.account);
  useEffect(() => {
    dispatch(fetchProductsById(productId));
  }, [productId]);

  return (
    <div className="product-card h-100 product-details">
      {isLoading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
            padding: "0.625rem",
          }}
        >
          <Skeleton variant="rectangular" height="480px" />
          {Array.from(new Array(4)).map((i, index) =>
            index % 2 == 0 ? (
              <Skeleton
                id={i}
                key={index}
                variant="rectangular"
                height="40px"
                width="200px"
              />
            ) : (
              <Skeleton
                id={i}
                key={index}
                variant="rectangular"
                height="30px"
                style={{
                  marginBottom: "1rem",
                }}
              />
            )
          )}
        </div>
      ) : (
        <>
          <div
            className="w-100 border-bottom"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.625rem",
            }}
          >
            <h6 className=" p-3 mb-0 w-100">{currentProduct.title}</h6>
            {currentProduct.postedBy === localStorage.getItem("userName") && (
              <IconEdit
                className="icon-edit"
                onClick={() => navigateTo(`/edit/product/${currentProduct.id}`)}
              />
            )}
          </div>
          <UncontrolledCarousel
            style={{ height: "30rem" }}
            items={
              Array.isArray(currentProduct?.productImageDatas)
                ? currentProduct?.productImageDatas.map((i, index) => ({
                    altText: index,
                    caption: "",
                    key: 1,
                    src: prefixBase64(i.imageData),
                  }))
                : []
            }
          />
          <div className="p-4 product-details-body product-details">
            <h5>Description</h5>
            {currentProduct.description}
            <h6>Price</h6>
            AED:{` ${currentProduct.price}`}
            <h6>Contact</h6>
            {isLoggedIn ? (
              currentProduct.contactNumber
            ) : (
              <div
                onClick={() => {
                  localStorage.setItem("redirectPath", pathname);
                  navigateTo("/login");
                }}
                role="button"
              >
                <IconView />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
