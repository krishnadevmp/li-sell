import { Row, Spinner } from "reactstrap";
import "./Products.css";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Search from "../search.js/Search";
import { useEffect } from "react";
import { fetchProducts } from "./ProductSlice";
import { useLocation, useNavigate } from "react-router-dom";
import ConfirmationModal from "../../components/ConfirmationModal";

const ProductList = () => {
  const { products, searchResultProducts, isLoading, confirmationModal } =
    useSelector((state) => state.products);
  const location = useLocation();
  const isUsersProducts = location.pathname.includes("/user");

  const productsToDisplay = isUsersProducts
    ? searchResultProducts.filter(
        (product) => product.postedBy === localStorage.getItem("userName")
      )
    : searchResultProducts;
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  useEffect(() => {
    if (isUsersProducts && !localStorage.getItem("userName")) {
      navigateTo("/login");
    }
  });
  useEffect(() => {
    dispatch(fetchProducts({}));
  }, []);

  return (
    <div>
      <ConfirmationModal />
      <Search />
      <Row>
        <h5 className="mb-3 mt-3">
          {isUsersProducts ? "Your products" : "Products"}
        </h5>

        <div className="product-card-container">
          {isLoading
            ? Array.from(new Array(8)).map((_card, index) => (
                <ProductCard key={index} />
              ))
            : productsToDisplay.map((item, index) => (
                <ProductCard
                  key={`${item.title}${index}`}
                  image={item.images?.length ? item.images[0] : ""}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  id={item.id}
                  postedBy={item.postedBy}
                />
              ))}
        </div>
      </Row>
    </div>
  );
};

export default ProductList;
