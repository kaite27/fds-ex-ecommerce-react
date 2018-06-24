import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Header,
  Brand,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

export default function NavBar({
  username = null, // 표시할 사용자 이름
  onLogout = () => {}, // 로그아웃 버튼 클릭 시 호출할 함수
}) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link className="navbar-brand" to="/">
            MAll
          </Link>
        </Navbar.Brand>
        <Nav>
          <NavItem className="nav-item" eventKey={1} href="#">
            Home
          </NavItem>
          <NavItem className="nav-item" eventKey={2} href="#">
            New Arrivals
          </NavItem>
          <NavItem className="nav-item" eventKey={3} href="#">
            Products
          </NavItem>
          <NavItem className="nav-item" eventKey={4} href="#">
            Contact us
          </NavItem>
          <NavItem className="username-box">Hi there!</NavItem>
          <NavDropdown
            eventKey={3}
            title="Accounts"
            id="basic-nav-dropdown"
            className="dropdown-menu"
          >
            <MenuItem className="dropdown-item offScreen" eventKey={3.1}>
              Manage Site
            </MenuItem>
            <MenuItem className="dropdown-item" eventKey={3.2}>
              Sign in
            </MenuItem>
            <MenuItem className="dropdown-item" eventKey={3.3}>
              My Orders
            </MenuItem>
            <MenuItem className="dropdown-item" eventKey={3.4}>
              Shopping Cart
            </MenuItem>
            <MenuItem className="dropdown-item offScreen" eventKey={3.5}>
              Sales Report
            </MenuItem>
            <MenuItem divider />
            <MenuItem className="dropdown-item" eventKey={3.6}>
              Log in
            </MenuItem>
            <MenuItem className="dropdown-item offScreen" eventKey={3.7}>
              Log Out
            </MenuItem>
          </NavDropdown>

          <NavItem className="cart-icon">
            <Link to="/">
              <i className="fas fa-shopping-cart cart-icon__i" />
            </Link>
            <span className="badge badge-circle cart-item__cnt" />
          </NavItem>
        </Nav>
      </Navbar.Header>
    </Navbar>
  );
}
