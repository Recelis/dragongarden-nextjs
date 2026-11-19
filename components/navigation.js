import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { SocialIcon } from "react-social-icons";

const Navigation = () => {
  return (
    <Navbar className="navbar-dragon" expand="lg" fixed="top" style={{ zIndex: 1030 }}>
      <Navbar.Brand>
        <ScrollLink to="hero" spy={true} smooth={true} duration={500} offset={-70}>
          Dragon Garden
        </ScrollLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={ScrollLink} to="hero" spy={true} smooth={true} duration={500} offset={-70} className="text-light">
            Home
          </Nav.Link>
          <Nav.Link as={ScrollLink} to="menu" spy={true} smooth={true} duration={500} offset={-70} className="text-light">
            Menu
          </Nav.Link>
          <Nav.Link as={ScrollLink} to="hours" spy={true} smooth={true} duration={500} offset={-70} className="text-light">
            Hours
          </Nav.Link>
          <Nav.Link as={ScrollLink} to="map" spy={true} smooth={true} duration={500} offset={-70} className="text-light">
            Find Us
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="tel:0754825700" className="phone-number">
            📞 (07) 5482 5700
          </Nav.Link>
          <Nav.Link href="https://www.facebook.com/DragonGardenRestaurant/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center px-2" style={{ color: "rgba(255,255,255,0.85)" }}>
            <SocialIcon url="https://www.facebook.com/DragonGardenRestaurant" style={{ width: "20px", height: "20px" }} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;