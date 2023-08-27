import { CardGroup, Row, Col } from "reactstrap";
import "./Products.css";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div>
      <Row>
        <h5 className="mb-3 mt-3">Products</h5>
        <Col>
          <CardGroup>
            {products.map((item) => (
              <ProductCard
                key={item.title}
                productImage={item.image}
                productTitle={item.title}
                productDescription={item.description}
              />
            ))}
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductList;
