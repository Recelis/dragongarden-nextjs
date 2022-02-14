import React from "react";

const Footer = () => {
  return (
    <div className="d-flex flex-fill justify-content-center">
      <div className="d-flex justify-content-center">
        <p className="footer-text">
          {" "}
          &#169; {new Date().getFullYear()}. All Rights Reserved. Dragon Garden Family Restaurant Gympie
        </p>
      </div>
    </div>
  );
};

export default Footer;
