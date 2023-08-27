import { useLocation } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { categories } from "./Constants";
import "./Products.css";
import { useState } from "react";

const ProductForm = () => {
  const location = useLocation();
  const isEdit = location.pathname.includes("edit");
  const [images, setImages] = useState([{ fileName: "", fileData: "" }]);
  const [productData, setProductData] = useState({
    title: "",
    price: 0,
    description: "",
    category: 0,
    contactNumber: "",
    address: "",
  });
  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            {`${isEdit ? "Edit" : "Add"} product`}
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="productTitle">Title</Label>
                <Input
                  id="productTitle"
                  name="title"
                  placeholder="Product title"
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">Price</Label>
                <Input
                  id="price"
                  name="price"
                  placeholder="Price"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  type="textarea"
                  placeholder="Product description"
                />
              </FormGroup>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input id="category" name="category" type="select">
                  {categories.map((category) => (
                    <option key={category.id}>{category.title}</option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="contactNumber">Contact number</Label>
                <Input
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Phone"
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input id="address" name="address" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label>Images</Label>
                <div className="product-form-file-container">
                  {images.map((image, index) => (
                    <div key={index} className="product-form-file">
                      <Input id={`images${index}`} name="images" type="file" />
                      {index === 0 ? (
                        <Button
                          title="Add more images"
                          color="primary"
                          onClick={() =>
                            setImages((prev) => [
                              ...prev,
                              { fileData: "", fileName: "" },
                            ])
                          }
                        >
                          +
                        </Button>
                      ) : (
                        <Button
                          className="product-form-cancel-button"
                          onClick={() =>
                            setImages((prevImages) =>
                              prevImages.filter(
                                (_prevImage, prevImageIndex) =>
                                  prevImageIndex !== index
                              )
                            )
                          }
                        >
                          x
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </FormGroup>
              <div className="product-form-buttons">
                <div>
                  <Button type="reset" className="product-form-cancel-button">
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button type="button" color="primary">{`${
                    isEdit ? "Update" : "Add"
                  }`}</Button>
                </div>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductForm;
