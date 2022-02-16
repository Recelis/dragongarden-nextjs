import React from "react";
import Container from "react-bootstrap/Container";

import { SocialIcon } from "react-social-icons";

const Details = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center flex-column align-items-center mb-2">
        <div className="d-flex flex-wrap">
          <span>
            <u>LICENSED</u>-
          </span>
          <span>
            <u>AIR CONDITIONED</u>-
          </span>
          <span>
            <u>TAKE AWAY</u>
          </span>
        </div>
        <p className="my-0">Please call us to make a booking</p>
        <a
          href="https://www.google.com/maps/dir//-26.1915088,152.6566924/@-26.191509,152.656692,18z?hl=en"
          alt="#"
          className="my-0 text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          18 Wickham Street, Bruce Highway, GYMPIE
        </a>
        <p className="my-0">(Opposite Super Cheap Auto)</p>
        <div className="d-flex justify-content-center my-0 flex-wrap">
          <p className="mx-1 my-0 ">
            Phone:{" "}
            <a href="tel: 0754825700" className="text-primary">
              (07) 5482 5700
            </a>
          </p>
          <p className="mx-1 my-0 ">
            Mobile Phone:{" "}
            <a href="tel:+61-413-889-889" className="text-primary">
              0413 889 889
            </a>{" "}
            (Douglas)
          </p>
        </div>
        <p className="mx-1 my-0 ">
          Like us on{" "}
          <SocialIcon
            url="https://www.facebook.com/DragonGardenRestaurant"
            style={{ width: "25px", height: "25px" }}
            target="_blank"
            rel="noopener noreferrer"
          />{" "}
          <a
            href="https://www.facebook.com/DragonGardenRestaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Facebook
          </a>
          !
        </p>
      </div>
    </Container>
  );
};

export default Details;
