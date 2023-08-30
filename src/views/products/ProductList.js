import { Row } from "reactstrap";
import "./Products.css";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div>
      <Row>
        <h5 className="mb-3 mt-3">Products</h5>
        <div className="product-card-container">
          {products.map((item, index) => (
            <ProductCard
              key={`${item.title}${index}`}
              image={item.images?.length ? item.images[0] : ""}
              title={item.title}
              description={item.description}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      </Row>
    </div>
  );
};

export default ProductList;
