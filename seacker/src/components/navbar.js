import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { checkLogin } from '../stores/actions'
import { Navbar, Button, Nav, Form, FormControl, NavDropdown} from 'react-bootstrap'


const NavbarPage = (props) => {
    
    useEffect(() => {
    }, [])

    function logout(e){
        localStorage.removeItem('token')
        props.history.push('/')
        props.checkLogin()
        e.preventDefault()
    }
    
    return (
    <Navbar className="navbarpage" expand="lg">
        <Navbar.Brand href="/"><img src={require('../image/logo.png')} alt="logo" width="30px"/> CIMBSeacker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link> */}
            </Nav>
            <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2"/> */}
            {/* <button className="btn-custom">Search</button> */}
            {
                props.isLogin === true && (
                    <button className="btn-custom" onClick={(e) => logout(e)}>Logout</button>
                )
            }
            </Form>
        </Navbar.Collapse>
    </Navbar>
    )
}

const mapPropstoState = state => {
    return {
        ...state
    }
  }
  
const mapDispatchtoProps = { checkLogin }

export default withRouter(connect(mapPropstoState, mapDispatchtoProps)(NavbarPage))