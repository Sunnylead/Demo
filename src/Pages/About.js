import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import React from 'react';
import Container  from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet, Link } from "react-router-dom";
import './mystyle.css';

const Contact = () => {
    return (
        <>


       
        <Container className=''>
        <h1 className='text-center'>About Me Page</h1>
        <h2 className='text-center'><Link to="/">Back</Link></h2>
  <Row>
    <Col className='col-md-4 offset-md-4 bg-success p-5 text-white rounded'>
    <h2 className='text-center'>Login</h2>
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
    <Button variant="light"className='dark' type="submit" style={{fontweight:''}}>
    Submit
    </Button>
  </Form>
    </Col>
    </Row>
  </Container>
 
  
      <Outlet />
      </>
    );
  };
  
  export default Contact;
 
  