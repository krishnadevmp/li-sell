import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const ProductCard = ({ productImage, productTitle, productDescription }) => {
  return (
    <Card className="product-card">
      <CardImg alt="Card image cap" src={productImage} top width="100%" />
      <CardBody>
        <CardTitle tag="h5">{productTitle}</CardTitle>
        <CardText>{productDescription}</CardText>
        <Button color="primary">Buy</Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
