import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar className="my-2" color="dark" dark expand="md">
      <NavbarBrand href="/">Amberflo</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link className="navItemLink" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link className="navItemLink" to="/meters/create">
              Create
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}
