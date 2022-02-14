import React, { Component } from "react";
import Logo from "./images/logo.png";
import Image from "next/image";

class Header extends Component {
  render() {
    return (
      <div className="px-2 bg-white" style={{ position: "sticky", top: "0px" }}>
        <Image src={Logo} alt="Picture of Logo" height={60} width={160} />
      </div>
    );
  }
}

export default Header;
