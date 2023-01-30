import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"> Menu </Navbar.Toggle>
                <Navbar.Brand>ShoppingWeb!</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" style={{ flex: "10" }}>
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            <Link className="dropdown-item" to="/cate-fnb">Food & Beverages</Link>
                            <Link className="dropdown-item" to="/cate-pcnh">Personal Care & Health</Link>
                            <Link className="dropdown-item" to="/cate-h">Houseware</Link>
                        </NavDropdown>
                    </Nav>
                        <span className="hover-display nav-link">
                            Shopping List
                            <div className="hover-menu dropdown-menu">
                                <span className="dropdown-item">Item A $10</span>
                                <span className="dropdown-item">Item B $10</span>
                                <span className="dropdown-item">Item C $10</span>
                                <Button variant="warning">Checkout</Button>
                            </div>
                        </span>
                        
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;