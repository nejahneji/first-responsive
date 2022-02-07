import React from "react";

import "./Footer.css";


const Footer = () => {
  return (
    <footer id='contact'>
      
          <p>Services commercial </p>
        <div>
          <div className="contact">
            <i class="fas fa-phone-volume fa-2x"></i>
            <p className={{ color: "white" }}>Mr Taha Gargouri : 26855566</p>
          </div>
          <div className="contact">
            <i class="fas fa-phone-volume fa-2x"></i>{" "}
            <p>Mr Haykal Masmoudi : 26855666</p>
          </div>
        </div>
        <div>
          <div className="contact">
            <i class="far fa-building fa-2x"></i> <p>74225025</p>{" "}
          </div>
          <div className="contact">
            <i class="far fa-envelope fa-2x"></i>{" "}
            <p> piecesautos.gt@gmail.com</p>
          </div>
        </div>
      
      <div className="wrapper">
        <div className="icon instagram ">
          <div className="tooltip">instagram</div>
          <span>
            <a href="https://www.instagram.com/nejah_neji/">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
        </div>

        <div className="icon facebook">
          <div className="tooltip">Facebook</div>
          <span>
            <a href="https://www.facebook.com/GT-pi%C3%A9ces-autos-108281581758858" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </span>
        </div>
      </div>
      {/* <ScrollButton/> */}
    </footer>
  );
};

export default Footer;
