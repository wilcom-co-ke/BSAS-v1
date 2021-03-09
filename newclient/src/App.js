import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Portal

// import logo from './logo.svg';
 import './App.css';

import Specialcategory from "./forms/Specialcategory";


function App() {
  return (
    <div className="App">
    <Specialcategory/>
      <BrowserRouter>
<Switch>
  {/* <Route path="/" exact component={Users} />; */}
  <Route path="/Specialcategory" exact component={Specialcategory} />;
  {/* <Route path="/Smtp" exact component={Smtp} />;
  <Route path="/Auditrails" exact component={Auditrails} />; */}
  
  </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
