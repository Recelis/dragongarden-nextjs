import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

var Scroll = require("react-scroll");
var Element = Scroll.Element;

const OpenHours = () => {
  return (
    <div className="Component mb-4">
      <Container fluid bsPrefix="menu">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Element name="hours">
              <h2>
                <u>Hours</u>
              </h2>
            </Element>
            <div className="row">
              <div className="col-11 d-flex justify-content-between">
                <span className="mx-1">Monday</span>
                <span>Closed</span>
              </div>
            </div>
            <div className="row">
              <div className="col-11 d-flex justify-content-between">
                <span className="mx-1">Tuesday - Saturday</span>
                <span>11am–2:30pm, 4:30–9pm</span>
              </div>
            </div>
            <div className="row">
              <div className="col-11 d-flex justify-content-between">
                <span className="mx-1">Sunday</span>
                <span>12pm-2:30pm, 4:30pm-9pm</span>
              </div>
            </div>
            <div className="row">
              <div className="col-11 d-flex justify-content-between">
                <span className="mx-1">Public Holidays</span>
                <span>
                  Check on &nbsp;
                  <a href="https://www.facebook.com/DragonGardenRestaurant/">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <span className="mx-1">Public Holiday Surcharge - 15%.</span>
              </div>
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default OpenHours;
