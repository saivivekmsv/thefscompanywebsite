import React, { useState } from "react";
import Sample from "../../assets/images.jpg";
import {Image, Col, Row, Button} from "react-bootstrap";
import ReactFlipCard from "react-card-flip";
import { BackSide } from "./backSide";

export const ItemContainer = () => {
    const [flipped, setFlipped] = useState(false);
    
    const UserClick = (e) => {
        e.preventDefault();
        setFlipped(!flipped);
    }

    return (
        <ReactFlipCard isFlipped={flipped} flipDirection="vertical" infinite="true">
            <div className="main_content">
                <Row>
                    <Col>
                    <Image src={Sample} alt="sample" className="image-container"/>
                    </Col>
                    <Col>
                    <p>Name</p>
                    <span>Description</span>
                    </Col>
                </Row>
               
               <Row>
                   <Col>
                    <p>Price</p>
                   </Col>
                   <Col>
                   <Button onClick={UserClick}>frontToback</Button>
                   </Col>
               </Row>
                
            </div>

            <div className="main_content">
                <BackSide userClick={UserClick}/>                
            </div>

        </ReactFlipCard>
    )
}