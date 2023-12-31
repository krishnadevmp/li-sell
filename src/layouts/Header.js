import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import Logo from "./Logo";
// import LogoWhite from "../assets/images/logos/favicon5.png";
import user1 from "../assets/images/users/user4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../views/account/AccountSlice";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  const navigateTo = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  return (
    <Navbar color="primary" dark expand="md" className="fix-header">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
          <Logo />
        </div>
        <img />
        <NavbarBrand href="/">
          {/* <img src={LogoWhite} /> */}
          {/* <LogoWhite className=" d-lg-none" /> */}
        </NavbarBrand>
        <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          {isLoggedIn && (
            <NavItem>
              {
                <Link to="add/product" className="nav-link">
                  Add product
                </Link>
              }
            </NavItem>
          )}
          <NavItem>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </NavItem>
          <UncontrolledDropdown hidden inNavbar nav>
            <DropdownToggle caret nav>
              DD Menu
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {isLoggedIn ? (
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle color="transparent">
              <img
                src={user1}
                alt="profile"
                className="rounded-circle"
                width="30"
              ></img>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => navigateTo("/products/user")}>
                My products
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  dispatch(logout());
                  navigateTo("/login");
                }}
              >
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Dropdown isOpen={dropdownOpen} toggle={() => navigateTo("/login")}>
            <DropdownToggle color="transparent">Login</DropdownToggle>
          </Dropdown>
        )}
      </Collapse>
    </Navbar>
  );
};

export default Header;
