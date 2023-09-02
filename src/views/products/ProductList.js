import { Row } from "reactstrap";
import "./Products.css";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import Search from "../search.js/Search";

const ProductList = () => {
  const { products, searchResultProducts } = useSelector(
    (state) => state.products
  );
  return (
    <div>
      <Search />
      <Row>
        <h5 className="mb-3 mt-3">Products</h5>
        <div className="product-card-container">
          {searchResultProducts.map((item, index) => (
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
