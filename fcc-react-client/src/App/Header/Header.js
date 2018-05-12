import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";

import { NavRoutes } from "../../Projects";

export default class Header extends React.Component {
  constructor() {
    super();

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
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Speedrun - May 2018</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <NavRoutes />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
