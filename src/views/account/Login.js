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
import { useState } from "react";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const navigateTo = useNavigate();
  const [productData, setProductData] = useState({
    title: "",
    price: 0,
    description: "",
    category: 0,
    contactNumber: "",
    address: "",
    images: [{}],
  });
  const onChange = (event) =>
    setProductData((prev) => {
      let { value } = event.target;
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
            {/* <i className="bi bi-bell me-2"> </i> */}
            Login
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="userName">Username</Label>
                <Input
                  id="userName"
                  name="userName"
                  placeholder="Username"
                  value={productData.title}
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={productData.title}
                  onChange={onChange}
                />
              </FormGroup>
              <div className="product-form-buttons">
                <div>
                  <Button
                    type="button"
                    color="primary"
                    onClick={() => {
                      navigateTo("/products");
                    }}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginForm;
