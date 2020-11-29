import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = ({ logout }) => {
    return (        
        <Navbar className="width-page shadow-sm bg-danger border-bottom" collapseOnSelect sticky="top" expand="lg" variant="dark" style={{"background": "#FFF"}}> 
        <Container>
          <Navbar.Brand>        
                <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">          
            <Nav className="ml-auto">
                <Nav.Link href="#?" className="text-white" >Benevits</Nav.Link>                          
              <Link to="/">
                <Nav.Link href="#?" onClick={() => logout()}>Cerrar Sesion</Nav.Link>                          
              </Link>  
                {/* <Button variant="link" className="text-white" onClick={() => showBenevits()}>Benevits</Button>               */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  
    );
}
 
export default Header;