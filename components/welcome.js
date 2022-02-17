import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Alert } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container fluid className="bg-black">
      <Row>
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          {/* <Alert variant="danger">
            Due to COVID we are temporarily closed. Sorry for any inconvenience. We will let you know when we will be
            open again! Stay safe!
          </Alert> */}
          <div className="d-flex  justify-content-center mx-1 align-items-center" style={{ height: "70vh" }}>
            <div>
              <h1 className="welcome-text d-lg-none text-light" style={{ fontSize: "36px" }}>
                The Dragon Garden Family welcomes you to our <Lanton />
              </h1>
              <h1 style={{ fontSize: "3.5rem" }} className="welcome-text text-light d-none d-lg-block">
                The Dragon Garden Family welcomes you to our <Lanton />
              </h1>
              <h2 className="text-muted welcome-text-subheading d-lg-none" style={{ fontSize: "16px" }}>
                龙苑 大 酒家 欢迎 您 品尝 我们 的 传统 中式 佳肴 。
              </h2>
              <h2 className="text-muted welcome-text-subheading d-none d-lg-block">
                龙苑 大 酒家 欢迎 您 品尝 我们 的 传统 中式 佳肴 。
              </h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </Row>
    </Container>
  );
};

const Lanton = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="bg-warning rounded" style={{ width: "100px", height: "25px" }}></div>
      <div
        className="bg-danger p-4 text-dark"
        style={{ maxWidth: "300px", borderRadius: "40px", boxShadow: "10px 5px 5px gray" }}
      >
        <div>Traditional</div> <div>Chinese </div>
        <div>Cuisine</div>
      </div>

      <div className="bg-warning" style={{ width: "100px", height: "50px" }}></div>
    </div>
  );
};

export default Welcome;
