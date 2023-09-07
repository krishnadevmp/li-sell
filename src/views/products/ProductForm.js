import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsById, postProduct, putProduct } from "./ProductSlice";
import { prefixBase64, toBase64 } from "../../Utils";
import { Skeleton } from "@mui/material";

const defaultProduct = {
  title: "",
  price: 0,
  description: "",
  category: 0,
  contactNumber: "",
  address: "",
  productImageDatas: [{}],
};
const ProductForm = () => {
  const location = useLocation();
  const { id } = useParams();
  const { currentProduct } = useSelector((state) => state.products);
  const navigateTo = useNavigate();
  const isEdit = location.pathname.includes("edit");
  const [productData, setProductData] = useState(defaultProduct);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.products);
  useEffect(() => {
    if (!localStorage.getItem("userName")) {
      navigateTo("/login");
    }
  });

  useEffect(() => {
    if (!isEdit) {
      setProductData(defaultProduct);
    } else {
      setProductData(currentProduct);
    }
  }, [isEdit, currentProduct]);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductsById(id));
    }
  }, [id]);

  const onChange = (event) =>
    setProductData((prev) => {
      let { value } = event.target;
      if (event.target.name === "productImageDatas") {
        const images = [...prev.productImageDatas];
        images.pop();
        images.push(toBase64(event.target.files[0]));
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

          {isLoading ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.625rem",
                padding: "0.625rem",
              }}
            >
              {Array.from(new Array(12)).map((i, index) =>
                index % 2 == 0 ? (
                  <Skeleton
                    id={i}
                    key={index}
                    variant="rectangular"
                    height="25px"
                    width="150px"
                  />
                ) : (
                  <Skeleton
                    id={i}
                    key={index}
                    variant="rectangular"
                    height="37.6px"
                    style={{
                      marginBottom: "1rem",
                    }}
                  />
                )
              )}
            </div>
          ) : (
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
                    {isEdit ? (
                      <>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                            gap: "0.625rem",
                          }}
                        >
                          {productData.productImageDatas?.map((data) => (
                            <div className="product-card-img">
                              <img
                                alt="Card image cap"
                                src={prefixBase64(data.imageData)}
                                width="100%"
                                height="100%"
                              />
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      productData.productImageDatas?.map((image, index) => (
                        <div key={index} className="product-form-file">
                          <Input
                            id={`images${index}`}
                            name="productImageDatas"
                            type="file"
                            onChange={onChange}
                          />
                          {index === 0 ? (
                            <Button
                              disabled={isLoading}
                              title="Add more images"
                              color="primary"
                              onClick={() =>
                                setProductData((prev) => ({
                                  ...prev,
                                  productImageDatas: [
                                    ...prev.productImageDatas,
                                    {},
                                  ],
                                }))
                              }
                            >
                              +
                            </Button>
                          ) : (
                            <Button
                              disabled={isLoading}
                              className="product-form-cancel-button"
                              onClick={() =>
                                setProductData((prev) => ({
                                  ...prev,
                                  productImageDatas:
                                    prev.productImageDatas.filter(
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
                      ))
                    )}
                  </div>
                </FormGroup>
                <div className="product-form-buttons">
                  <div>
                    <Button
                      disabled={isLoading}
                      onClick={() => navigateTo("/products")}
                      type="reset"
                      className="product-form-cancel-button"
                    >
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Button
                      disabled={isLoading}
                      type="button"
                      color="primary"
                      onClick={() => {
                        if (isEdit) {
                          dispatch(putProduct(productData));
                        } else {
                          dispatch(
                            postProduct({
                              ...productData,
                              postedBy: localStorage.getItem("userName"),
                            })
                          );
                        }
                      }}
                    >{`${isEdit ? "Update" : "Add"}`}</Button>
                  </div>
                </div>
              </Form>
            </CardBody>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default ProductForm;
