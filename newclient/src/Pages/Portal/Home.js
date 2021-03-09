import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Home = (props) => {
  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      <Nav />

      <div
        id="content"
        className="contentt"
        
      >
      </div>
     
      <Footer />
    </div>
  );
};

export default Home;
