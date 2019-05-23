import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../assets/nyc-logo.png';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #181818;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #CDCDCD;
    &:hover {
      color: white;
      text-decoration: none;
    }
  }
  .navbar-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(299,299,299, 0.7)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
`;

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Styles>
        <Navbar expand="md">
          <NavbarBrand href="/">
            <img
              alt="logo"
              src={logo}
              width="75"
              height="60"
              className="d-inline-block align-center"
            />
            {"Job Finder"}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/">Home</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/about">About</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Styles>
    );
  }
}

export default NavigationBar;