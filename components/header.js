import React, { Component } from "react";
import Logo from "./images/logo.png";
import Image from "next/image";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center my-0">
          <Image src={Logo} alt="Picture of Logo" height={120 + "px"} width={320} />
        </div>
        <div className="d-flex justify-content-center">
          <i>In Gympie since 1983</i>
        </div>
      </div>
    );
  }
}

export default Header;
