import React from "react";
import {ItemContainer} from "./itemContainer";
import {Container,Row,Col} from "react-bootstrap";

function ItemCard() { 
    
    

    return (
       <Container>
           <Row>
           <Col>
             <ItemContainer/>                
           </Col>    
           <Col>
             <ItemContainer/>                
           </Col>     
           <Col>
             <ItemContainer/>                
           </Col> 
           </Row>

           <Row>
           <Col>
             <ItemContainer/>                
           </Col>    
           <Col>
             <ItemContainer/>                
           </Col>     
           <Col>
             <ItemContainer/>                
           </Col> 
           </Row>
          
       </Container>         
    )
  }

export default ItemCard;