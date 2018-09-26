import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    // ** Don't need constructor since not binding custom methods to 'this'. **
    // constructor(props) {
    //     super(props);
    state = {
        isOpen: false
    }
    // ** Using arrow function workaroundl to avoid needing to bind 'this' **
    // this.toggle = this.toggle.bind(this);)

    // Arrow function workaround to avoid needing to bind each custom method.
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Shopping List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/mericks/MERN-shopping-list" target="_blank">Source Code</NavLink>
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

