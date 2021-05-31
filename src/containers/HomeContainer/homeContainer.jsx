import React from "react";
import { Image } from "react-bootstrap";
import {NavHeader, ScrollComponent, Footer} from "../../components";

const HomeContainer = () => {

    return (
        <div>   
            <NavHeader/>        
            <ScrollComponent/>
            <Footer/>
        </div>
    )
};

export default HomeContainer;