import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import React from 'react';
import Container  from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";


import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons';
import 'animate.css';
import './mystyle.css';


const Home = () => {
    
    return (
   <>
<h3 className='text-center'> Silver Tech</h3>
<p  className='text-center'>Think it we create it </p>

{["md"].map((expand) => (
        <Navbar key={expand} bg="dark" variant= "dark" expand={expand} className="mb-3 sticky-top">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className='bg-dark text-white'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}> </Offcanvas.Title>
              </Offcanvas.Header>
              
              <Offcanvas.Body className='bg-dark text-white'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href='#gg' className='bord'>Home</Nav.Link>
                  <Nav.Link href='#g'  className='bord'>Pricing</Nav.Link>
                  <NavDropdown  
                    title="Our Services" 
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/about"   className='bord'>About Us</Nav.Link>
                  <Nav.Link className='bord'><Link to="/contact">Contact Us</Link></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}




{/* <img src={me} width='40%' alt="logo" /> */}








<Container>
  <Row>
    <Col>
    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </Col>
      <Col>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
</Col>

<Col>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
</Col>
</Row>
</Container>








    <Container className='mt-5'>
  <Row>
    <Col className='col-md-4 offset-md-4 bg-success p-5 text-white rounded'>
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    </Col>
    </Row>
  </Container>
 



  <Container fluid  className ="p-4 bg-dark">
    <Row>
      <Col sm={10} className='text-light'> 
          <h2 class="animate__animated animate__fadeIn animate__infinite">Keep Jumping</h2></Col>
      <Col className='d-flex justify-content-between'>
                      
         <Link to="/contact"> <FontAwesomeIcon className='icc' icon={faFacebook} /></Link >
         <a href='#f'><FontAwesomeIcon className='icc' icon={faGithub} /></a>
         <a href='#f'><FontAwesomeIcon className='icc' icon={faWhatsapp} /></a>
         <a href='#f'><FontAwesomeIcon className='icc' icon={faYoutube} /></a>
         <a href='#f'><FontAwesomeIcon className='icc' icon={faLinkedin} /></a>
                      
    </Col>
  </Row>
</Container>
  <Outlet />
   </>

    );
  };
  
  export default Home;
  