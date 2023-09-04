import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UncontrolledCarousel } from "reactstrap";
import "./Products.css";

const ProductDetails = () => {
  const navigateTo = useNavigate();
  let { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const { isLoggedIn } = useSelector((state) => state.account);

  const product = products.find((p) => p.id == id);
  return (
    <div className="product-card h-100 product-details">
      <h6 className="border-bottom p-3 mb-0">{product.title}</h6>
      <UncontrolledCarousel
        style={{ height: "30rem" }}
        items={
          Array.isArray(product?.images)
            ? product?.images.map((i, index) => ({
                altText: index,
                caption: "",
                key: 1,
                src: i,
              }))
            : []
        }
      />
      <div className="p-4 product-details-body product-details">
        <h5>Description</h5>
        {product.description}
        <h6>Price</h6>
        AED:{` ${product.price}`}
        <h6>Contact</h6>
        {isLoggedIn ? (
          product.contactNumber
        ) : (
          <div onClick={() => navigateTo("/login")} role="button">
            Show
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
