import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import About from './About';


class AppNavbar extends Component {
    // ** Don't need constructor since not binding custom methods to 'this'. **
    // constructor(props) {
    //     super(props);
    state = {
        isOpen: false
    }
    // ** Using arrow function rather than binding 'this' manually **
    // this.toggle = this.toggle.bind(this);)

    // ** Using arrow function rather than binding 'this' manually **
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        return (
            <div>
                <Navbar color="dark" dark expand="sm">
                    <Container>
                        {/* <img class="navbar-image" src="../assets/cheeseBackground.jpg" alt="Cheese Force" href="/" /> */}
                        <NavbarBrand href="/">Cheese Force</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {/* <NavItem>
                                    <About />
                                </NavItem> */}
                                <NavItem>
                                    <NavLink href="https://github.com/mericks/cheese-force_MERNFullStack" target="_blank">Source Code</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;

