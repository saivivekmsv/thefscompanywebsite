import React from "react";
import {Nav,Navbar,Form,FormControl,Button} from "react-bootstrap";

const NavHeader = () => {
  return (
    <>
  <Navbar className = "navbar">
    <Navbar.Brand href="/">The F's Company</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  
</>
  );
}

export default NavHeader;