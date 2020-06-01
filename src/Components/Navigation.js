import React,{Component} from 'react';
import {Navbar, Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
export class Navigation extends Component
{
    render()
    {
        return(
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand href="/">OnBoard</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink className="d-inline p-2 bg-dark text-white" to="/Customer/customer">Customer</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/Product/product">Product</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/Store/store">Store</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/Sales/sales">Sales</NavLink>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}