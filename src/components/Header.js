import React, { useState } from 'react';
import { Container, Navbar, Nav, Modal, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Header = ({ logout }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
      <div>

        <Navbar className="width-page shadow-sm bg-danger border-bottom" collapseOnSelect sticky="top" expand="lg" variant="dark" style={{"background": "#FFF"}}> 
        <Container>
          <Navbar.Brand>        
                <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">          
            <Nav className="ml-auto">
                <Nav.Link href="#!" className="text-white" >Benevits</Nav.Link>                                        
                <Nav.Link href="#!" className="text-white" onClick={handleShow}>Cerrar Sesion</Nav.Link>                                          
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Cerrar Sesion</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    ¿Deseas cerrar tu sesión?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                      No
                    </Button>
                    <Button variant="danger" onClick={logout}>
                      Si
                    </Button>
                  </Modal.Footer>
                </Modal>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  
      

      </div>        
    );
}


 
export default Header;