import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, UncontrolledCarousel } from "reactstrap";
import "./Products.css";

const ProductDetails = () => {
  let { id } = useParams();
  const { products } = useSelector((state) => state.products);
  console.log("products", products);
  const product = products.find((p) => p.id == id);
  return (
    <div className="product-card h-100 product-details">
      <h6 className="border-bottom p-3 mb-0">
        <i className="bi bi-bell me-2"> </i>
        {product.title}
      </h6>
      <div className="p-4 product-details-body product-details">
        <h5>{product.description}</h5>
        <h6>AED:{` ${product.price}`}</h6>
        <h6>Contact:{` ${product.contactNumber}`}</h6>
        <UncontrolledCarousel
          style={{ height: "30rem" }}
          items={
            Array.isArray(product?.images) &&
            product?.images.map((i, index) => ({
              altText: index,
              caption: "",
              key: 1,
              src: i,
            }))
          }
        />
        {/* <Button
          className="mt-3"
          color="primary"
          href="https://wrappixel.com/templates/materialpro-react-admin/?ref=33"
          target="_blank"
        >
          Check Pro Version
        </Button> */}
      </div>
    </div>
  );
};

export default ProductDetails;
