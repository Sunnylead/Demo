import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import React from 'react';
import Container  from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.css';

import { Outlet, Link } from "react-router-dom";

const Contact = () => {
    return (
        <>


       
        <Container className='bg-dark'>
        <h1>Contact Me</h1>
  <Row>
    <Col className='col-md-4 offset-md-4'>
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
   
   
      
    <Col className='col-md-4 offset-md-4'>
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
  <h1><Link to="/">Back</Link></h1>
    </Col>
    </Row>
  </Container>
 
        
  
      <Outlet />
      </>
    );
  };
  
  
  export default Contact;
  
