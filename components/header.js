import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="px-2 bg-white" style={{ position: "sticky", top: "0px" }}>
        <img src={"/images/logo.png"} alt="Picture of Logo" height={60} width={160} />
      </div>
    );
  }
}

export default Header;
