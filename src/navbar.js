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
import CounterApp from './counter';
import HsApp from './hs_api';
import AllApps from './all_apps';

const pageName = 'react-first-look';
const contentRoot = document.getElementById("pageContent");

export default class Navigator extends React.Component {
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
    openHearthstoneApp = () => {
        ReactDOM.render(<HsApp />, contentRoot)
    };
    openUsernameApp = () => {
        ReactDOM.render(<UserGenerator />, contentRoot)
    };
    openAllApps = () => {
        ReactDOM.render(<AllApps />, contentRoot);
    };
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">
                        <img src={require('./images/react_logo.png')} width="50em" />
                        {pageName}
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Applications
                                </DropdownToggle>
                                <DropdownMenu right>

                                    <DropdownItem onClick={this.openUsernameApp} href="#">
                                        Username Generator
                                    </DropdownItem>

                                    <DropdownItem onClick={this.openHearthstoneApp} href="#">
                                        Hearthstone API GET
                                    </DropdownItem>

                                    <DropdownItem onClick={this.openCounterApp} href="#">
                                        Counter
                                    </DropdownItem>



                                    <DropdownItem divider />
                                    <DropdownItem onClick={this.openAllApps} href="#">
                                        Show All
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="https://github.com/jalonenrichard/ReactFirstLook" target="_blank">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}