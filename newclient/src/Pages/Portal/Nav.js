import React from "react";
import { Link } from "react-router-dom";
import { Container } from "winston";
import "./Style.Module.css";

const Nav = (props) => {
  return (
    <nav
      class="navbar navbar-expand-lg ftco-navbar-light fixed-top"
      id="ftco-navbar"
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fa fa-bars"></span> Menu
        </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
          <span
            style={{
              fontSize: "22px",
              color: "white",
              paddingTop: "10px",
              boxFlex: "",
            }}
          ></span>
         
          <div class="navGrid">
            <div class="logo-img" style={{ border: "1px," }}>
              <a href="#"></a>
            </div>
            <div class="ppip"> Public Procurement Information Portal</div>
          </div>
          {/* <br />
          <br /> */}
          <div class="width60">
            <ul
              class="navbar-nav m-auto"
              style={{ padding: "10px", fontSize: "16px" }}
            >
              <li class="nav-item ">
                <Link to="/Home">
                  <span class="nav-link active">HOME</span>
                </Link>{" "}
              </li>

              
              <li class="nav-item">
                <Link to="/Login">
                  <span class="nav-link bord login" style={{padding:"1px 5px"}}>  LOGIN/SIGN UP  </span>
                </Link>{" "}
              </li>
            </ul>
          </div>
        
        </div>
      </div>
    </nav>
  );
};

export default Nav;
