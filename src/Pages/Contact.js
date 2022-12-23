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


       
        <Container fluid className='bg-success'>
       
  <Row>
     <h1 className='text-center text-white'>Contact Me</h1>
    <Col  md className='col-md-4 offset-md-4'>
  <Form>


  <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label  className='text-white'>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label  className='text-white'>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"/>
    </Form.Group>







    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label  className='text-white'>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label  className='text-white'>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
   
 
   


    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label  className='text-white'>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label  className='text-white'>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out"  className='text-white'/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  <h1><Link to="/" className='text-white'>Back</Link></h1>
    </Col>
    </Row>
  </Container>
 
        
  
      <Outlet />
      </>
    );
  };
  
  
  export default Contact;
  
