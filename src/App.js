import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Switch, Route} from "react-router-dom";
import {HomeLayout, CartLayout, OrderLayout} from "./layout";

function App() {
  return (
    <>
     <Switch>
       <Route exact path="/" component={HomeLayout}/>
       <Route exact path="/order" component={OrderLayout}/>
       <Route exact path="/cart" component={CartLayout}/>
     </Switch>
  
    </>
  );
}

export default App;
