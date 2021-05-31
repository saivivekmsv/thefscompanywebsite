import React from 'react';
import Pizza from "../../assets/pizza.jpg";
import Shake from "../../assets/shake.jpg";
import Parallax from 'react-rellax';
import {Link} from "react-router-dom";
import { Image, Button, Row, Col,Container } from "react-bootstrap";
// import {faPizzaSlice} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ScrollComponent = () => {
  return (
    <Container fluid>
    
    <Row className="scroll-component">
    
    <Col>
    <Parallax speed={5}>
      <div className="side-data">
              <h1>The F's Company</h1>
              <p>We are here to serve you the best</p>
              <p>Satisfy your cravings with our products</p>
      </div>    
    </Parallax>
    
    
    <Button>
      <Link to="/order">
      Order Now
      </Link>
      
    </Button>
    </Col>
    <Col>
    <Parallax speed={5}>
    <Image src={Pizza} style={{height:"300px",width:"300px"}}/>
    </Parallax>
      
    </Col>
    
   
    </Row>
    
   
    <br/>
    <Row className="scroll-component2">
   
    
    <Col>
    <Parallax speed={1}>
      
      
          <div className="side-data">
              <h1>The F's Company</h1>
              <p>We are here to serve you the best</p>
              <p>Satisfy your cravings with our products</p>
      </div>    
      </Parallax>
    
    
    <Button>
      Order Now
    </Button>
    </Col>
    <Col>
    <Parallax speed={1}>
      <Image src={Shake} style={{height:"300px",width:"300px"}}/>
      </Parallax>
    </Col>
    
   
    </Row>

    <br/>

    <Row className="scroll-component">
    
    <Col>
    
      <div className="side-data">
              <h1>The F's Company</h1>
              <p>We are here to serve you the best</p>
              <p>Satisfy your cravings with our products</p>
      </div>    
  
    
    
    <Button>
      Order Now
    </Button>
    </Col>
    <Col>
      <Image src={Pizza} style={{height:"300px",width:"300px"}}/>
    </Col>
    
   
    </Row>
    
    </Container>
  )
}

export default ScrollComponent;