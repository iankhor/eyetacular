import React from 'react'
import {  Collapse, 
          Navbar, 
          NavbarToggler, 
          NavbarBrand, 
          Nav, 
          NavItem, 
          NavLink,
          Button,
          Row,
          Col } from 'reactstrap';

import HeaderImage from './../../assets/img/header-image.png'
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
          <Row>
            
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
          
          </Row>

          <Row>
            <Col>
              <p className="Header-title">We believe that connected eye care means better patient care</p>
            </Col> 
            <Col>
              <img src={HeaderImage} className="Header-image"/>
            </Col> 
          </Row>

          <Row>
            <Col>
              <div className="border"> Separator </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="Header-subheader">
              Oculo is being used by over 900 optometrists and 330 ophthalmologists within Australia. 
              The Oculo network provides eye care professionals with an innovative way to 
              share clinical information and grow your business via a secure web-based platform. 

              Benefits for patients and practitioners are:
              
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="border"> Separator </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="border"> Col 1 : Strengten ...</div>
            </Col>
            <Col>
              <div className="border"> Col 2 : Promote ...</div>
            </Col>
            <Col>
              <div className="border"> Col 3 : Fast cost effective ...</div>
            </Col>
            <Col>
              <div className="border"> Col 4 : High quality referrals ...</div>
            </Col>
          </Row>
        </div>
    );
  }
}

export default Header