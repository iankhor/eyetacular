import React , { Component }from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Pricing extends Component {
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

        <DropdownToggle className="Header-btn-dropdown">PRICING</DropdownToggle>

        <DropdownMenu className="Header-btn-dropdown-item">
          <DropdownItem>OPTOMETRIST</DropdownItem>
          <DropdownItem>OPHTHALMOLOGIST</DropdownItem>

        </DropdownMenu>
      </Dropdown>

    );
  }
}