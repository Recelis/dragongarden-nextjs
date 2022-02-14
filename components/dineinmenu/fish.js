import React from "react";
import MenuItem from "./menuItem";

const Fish = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">Fish 鱼</h3>
      <MenuItem itemNumber="71" itemName="Fish in Black Bean Sauce" itemPrice="22.00" />
      <MenuItem itemNumber="72" itemName="Fish in Ginger and Shallots" itemPrice="22.00" />
      <MenuItem itemNumber="73" itemName="Fish with Vegetables" itemPrice="22.00" />
    </div>
  );
};

export default Fish;
