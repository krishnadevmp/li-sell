import { Row, Spinner } from "reactstrap";
import "./Products.css";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Search from "../search.js/Search";
import { useEffect } from "react";
import { fetchProducts } from "./ProductSlice";

const ProductList = () => {
  const { products, searchResultProducts, isLoading } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts({}));
  }, []);
  return (
    <div>
      <Search />
      <Row>
        <h5 className="mb-3 mt-3">Products</h5>

        <div className="product-card-container">
          {isLoading
            ? Array.from(new Array(8)).map((_card, index) => (
                <ProductCard key={index} />
              ))
            : searchResultProducts.map((item, index) => (
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
