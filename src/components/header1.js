import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
const Header1 = ()=>{
    
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">G00361784</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
            <Nav.Link href="/homepage">Home</Nav.Link>
            <Nav.Link href="/create">Create employee</Nav.Link>
            <Nav.Link href="/read">List of employees</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
    

}

export default Header1;
