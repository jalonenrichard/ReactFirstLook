import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import ReactDOM from 'react-dom';
import UserGenerator from './username_generator';
import HsApp from './hs_api';
import CounterApp from './counter';
import ExpenseApp from './expense';

const pageName = 'react-first-look';
const contentRoot = document.getElementById("root");

export default class NavBar extends React.Component {
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
    openCounterApp = () => {
        ReactDOM.render(<CounterApp />, contentRoot)
    };
    openUsernameApp = () => {
        ReactDOM.render(<UserGenerator />, contentRoot)
    };
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">{pageName}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink >Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Applications
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={this.openUsernameApp} href="#">
                                        Username Generator
                                    </DropdownItem>
                                    <DropdownItem onClick={this.openCounterApp} href="#">
                                        Counter
                                     </DropdownItem>

                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

ReactDOM.render(<NavBar />, contentRoot);