import React, { Component } from 'react';
import {
  UncontrolledCollapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  // state = {
  //   isOpen: false
  // }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Shopping List</NavbarBrand>
            <NavbarToggler id="toggler" onClick={this.toggle} />
            <UncontrolledCollapse toggler="#toggler" navbar >
              <Nav className="ml-auto" navbar>  
                <NavItem>
                  <NavLink href="https://github.com/r0ss26/MERN-shopping-list-app">GitHub</NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default AppNavbar;