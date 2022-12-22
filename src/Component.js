
import 'bootstrap/dist/css/bootstrap.min.css';
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons';



function Component() {
  return (
    <div className="App">
     





 
  <Container fluid  className ="p-4 bg-dark">
    <Row>
      <Col sm={10} className='text-white'></Col>
      <Col className='d-flex justify-content-between'>
          <a href='#g'><FontAwesomeIcon className='icc' icon={faFacebook} /></a>
          <a href='#g'><FontAwesomeIcon className='icc' icon={faGithub} /></a>
          <a href='#g'><FontAwesomeIcon className='icc' icon={faWhatsapp} /></a>
          <a href='#h'><FontAwesomeIcon className='icc' icon={faYoutube} /></a>
          <a href='#h'><FontAwesomeIcon className='icc' icon={faLinkedin} /></a>
    </Col>
  </Row>
</Container>
</div>
  );
}

export default Component;
