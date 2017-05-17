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
import Pricing from './Pricing'

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
        <div className="Header">
        
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
                  <NavLink href="/Home">OCULO NETWORK</NavLink>
                </NavItem>
                <NavItem>
                  <Pricing />
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
        </div>
    );
  }
}

export default Header