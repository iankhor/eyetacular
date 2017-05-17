import React from 'react'
import {  Collapse, 
          Navbar, 
          NavbarToggler, 
          NavbarBrand, 
          Nav, 
          NavItem, 
          NavLink,
          Button } from 'reactstrap';

import OculoLogo from './../../assets/img/logo.png'
import AboutUs from './AboutUs'

class Header extends React.Component {
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
        <Navbar light toggleable className="Header-font">

          <NavbarToggler right onClick={this.toggle} />

          <NavbarBrand href="/">
            <img src={OculoLogo} className="Header-logo" alt="logo" />
          </NavbarBrand>

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Home">HOME</NavLink>
              </NavItem>
              <NavItem>
                <AboutUs />
              </NavItem>
              <NavItem>
                <NavLink href="/Home">OPTOMETRIST</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Home">OPHTHALMOLOGIST</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Home">FREE TRIAL</NavLink>
              </NavItem>
              <NavItem>
                <Button color="danger">LOGIN</Button>
              </NavItem>

            </Nav>
          </Collapse>

        </Navbar>
    );
  }
}

export default Header