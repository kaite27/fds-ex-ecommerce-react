import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default function NavBar({
  username = localStorage.getItem('username'),
  onLogout = () => {}, // 로그아웃 버튼 클릭 시 호출할 함수
}) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">BEIGENUT</a>
        </Navbar.Brand>
        <Nav>
          <NavItem className="nav-item" eventKey={1} href="/">
            Home
          </NavItem>
          <NavItem className="nav-item" eventKey={2} href="/#new-product">
            New Arrivals
          </NavItem>
          <NavItem className="nav-item" eventKey={3} href="/product">
            Products
          </NavItem>
          <NavItem className="nav-item" eventKey={4} href="/#subscribes">
            Contact us
          </NavItem>
          <NavItem className="username-box">
            {username ? `Welcome ${username} !` : 'Hi there!'}
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown
            eventKey={3}
            title="Accounts"
            id="basic-nav-dropdown"
            className="dropdown-menu"
          >
            <MenuItem className="dropdown-item offScreen" eventKey={3.1}>
              Manage Site
            </MenuItem>
            <MenuItem className="dropdown-item" eventKey={3.2} href="/register">
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
            <MenuItem
              className={
                localStorage.getItem('token')
                  ? 'dropdown-item offScreen'
                  : 'dropdown-item'
              }
              eventKey={3.6}
              href="/login"
            >
              Log in
            </MenuItem>
            <MenuItem
              className={
                localStorage.getItem('token')
                  ? 'dropdown-item'
                  : 'dropdown-item offScreen'
              }
              eventKey={3.7}
              onClick={() => onLogout()}
            >
              Log Out
            </MenuItem>
          </NavDropdown>
          <NavItem href="/my-cart" className="cart-icon">
            <i className="fas fa-shopping-cart cart-icon__i" />
            <span className="badge badge-circle cart-item__cnt">
              {localStorage.getItem('cartItem')}
            </span>
          </NavItem>
        </Nav>
      </Navbar.Header>
    </Navbar>
  );
}
