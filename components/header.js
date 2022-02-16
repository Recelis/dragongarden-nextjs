import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="px-2 bg-black" style={{ position: "sticky", top: "0px" }}>
        <img src="/logo.png" alt="Picture of Logo" height={60} width={160} />
      </div>
    );
  }
}

export default Header;
