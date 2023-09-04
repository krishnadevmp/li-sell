import { useLocation, useNavigate } from "react-router-dom";
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
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, postProduct } from "./ProductSlice";
import { convertToBase64 } from "../../Utils";

const ProductForm = () => {
  const location = useLocation();
  const navigateTo = useNavigate();
  const isEdit = location.pathname.includes("edit");
  const [productData, setProductData] = useState({
    title: "",
    price: 0,
    description: "",
    category: 0,
    contactNumber: "",
    address: "",
    images: [{}],
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("userName")) {
      navigateTo("/login");
    }
  });
  const onChange = (event) =>
    setProductData(async (prev) => {
      let { value } = event.target;
      debugger;
      if (event.target.name === "images") {
        const images = [...prev.images];
        images.pop();
        images.push(convertToBase64(event.target.files[0]));
        value = images;
      }

      return {
        ...prev,
        [event.target.name]: value,
      };
    });

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
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
                  value={productData.title}
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="price">Price</Label>
                <Input
                  id="price"
                  name="price"
                  placeholder="Price"
                  type="number"
                  value={productData.price}
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  type="textarea"
                  placeholder="Product description"
                  value={productData.description}
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input
                  id="category"
                  name="category"
                  type="select"
                  onChange={onChange}
                  value={productData.category}
                >
                  {categories.map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="contactNumber">Contact number</Label>
                <Input
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Phone"
                  onChange={onChange}
                  value={productData.contactNumber}
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  type="textarea"
                  onChange={onChange}
                  value={productData.address}
                />
              </FormGroup>
              <FormGroup>
                <Label>Images</Label>
                <div className="product-form-file-container">
                  {productData.images?.map((image, index) => (
                    <div key={index} className="product-form-file">
                      <Input
                        id={`images${index}`}
                        name="images"
                        type="file"
                        onChange={onChange}
                      />
                      {index === 0 ? (
                        <Button
                          title="Add more images"
                          color="primary"
                          onClick={() =>
                            setProductData((prev) => ({
                              ...prev,
                              images: [...prev.images, {}],
                            }))
                          }
                        >
                          +
                        </Button>
                      ) : (
                        <Button
                          className="product-form-cancel-button"
                          onClick={() =>
                            setProductData((prev) => ({
                              ...prev,
                              images: prev.images.filter(
                                (_prevImage, prevImageIndex) =>
                                  prevImageIndex !== index
                              ),
                            }))
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
                  <Button
                    onClick={() => navigateTo("/products")}
                    type="reset"
                    className="product-form-cancel-button"
                  >
                    Cancel
                  </Button>
                </div>
                <div>
                  <Button
                    type="button"
                    color="primary"
                    onClick={() => {
                      dispatch(
                        postProduct({
                          ...productData,
                          postedBy: localStorage.getItem("userName"),
                        })
                      );
                    }}
                  >{`${isEdit ? "Update" : "Add"}`}</Button>
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
