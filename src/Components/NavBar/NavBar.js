import React from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css';


const NavBar = () => {
    return (
        <div className='d-flex justify-content-around align-items-center'>
            <div>
                <h2 className=''>Auto Hive</h2>

            </div>
            <div className='myTextColor'>
                <Navbar bg="light" expand="lg">
                    <Container>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                <NavDropdown title="Home" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#link">About us</Nav.Link>
                                <NavDropdown title="Inventory" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Inventory</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Service" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Inventory</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#link">Blogs</Nav.Link>
                                <NavDropdown title="Pages" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Pages</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#link">Profile</Nav.Link>
                                <Nav.Link href="#link">Cart</Nav.Link>
                                <Nav.Link href="#link">Add Listing</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;