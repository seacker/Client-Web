import React from 'react'
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { Navbar, Button, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap'


const navbarPage = () => {
    return (
    <Navbar className="navbarpage" expand="lg">
        <Navbar.Brand href="/"><img src="../image/logo.png" alt="logo"/> CIMBSeacker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
            {/* <button className="btn-custom">Search</button> */}
            </Form>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default navbarPage