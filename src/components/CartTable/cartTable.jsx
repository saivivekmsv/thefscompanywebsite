import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {faPlusCircle}  from "@fortawesome/free-solid-svg-icons";

const CartTable =() => {
    return (
        <ReactBootstrap.Table striped bordered hover size="sm">
  <thead>
    <tr>
     
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Veg Mexican Pizza</td>
      <td>- 1 +</td>
      <td>300</td>
    </tr>
    <tr>
      
    <td>Veg Mexican Pizza</td>
      <td>- 1 +</td>
      <td>300</td>
    </tr>
    <tr>
      
      <td colSpan="2">Coupon Code</td>
      <td>Apply Code</td>
    </tr>
    <tr>
      
      <td colSpan="2">F+ Points</td>
      <td>20</td>
    </tr>
  </tbody>
</ReactBootstrap.Table>
    );
};

export default CartTable;