import React , { Component }from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>

        <DropdownToggle>ABOUT US</DropdownToggle>

        <DropdownMenu>
          <DropdownItem>ABOUT US</DropdownItem>
          <DropdownItem>BOARD</DropdownItem>
          <DropdownItem>NEWS</DropdownItem>
          <DropdownItem>SECURITY</DropdownItem>
          <DropdownItem>FAQ</DropdownItem>
          <DropdownItem>PRIVACY POLICY</DropdownItem>
        </DropdownMenu>
      </Dropdown>

    );
  }
}