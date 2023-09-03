import { useNavigate } from "react-router-dom";
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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./AccountSlice";
import "./Login.css";

const LoginForm = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const { error, isLoggedIn } = useSelector((state) => state.account);
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  const onChange = (event) =>
    setLoginData((prev) => {
      let { value } = event.target;
      return {
        ...prev,
        [event.target.name]: value,
      };
    });

  useEffect(() => {
    if (isLoggedIn) {
      navigateTo("/products");
    }
  }, [isLoggedIn]);

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            {/* <i className="bi bi-bell me-2"> </i> */}
            Login
          </CardTitle>
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <FormGroup>
                <Label for="userName">Username</Label>
                <Input
                  id="userName"
                  name="userName"
                  placeholder="Username"
                  value={loginData.title}
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.title}
                  onChange={onChange}
                />
              </FormGroup>
              {error && <div className="error-message">{error}</div>}
              <div className="product-form-buttons">
                <div>
                  <Button
                    type="submit"
                    color="primary"
                    onClick={() => {
                      dispatch(login(loginData));
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
