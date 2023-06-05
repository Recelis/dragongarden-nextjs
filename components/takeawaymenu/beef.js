import React from "react";
import MenuItem from "./menuItem";

const Beef = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">Beef 牛肉</h3>
      <MenuItem itemNumber="29" itemName="Fillet Steak in Chinese Style" itemPrice="25.00" />
      <MenuItem itemNumber="30" itemName="Sliced Fillet Steak in Special Sauce" itemPrice="25.00" />
      <MenuItem itemNumber="31" itemName="Sliced Beef with Cashew Nuts (diced veges)" itemPrice="21.50" />
      <MenuItem itemNumber="32" itemName="Sliced Beef with Vegetable" itemPrice="19.50" />
      <MenuItem itemNumber="33" itemName="Sliced Beef with Black Bean Sauce" itemPrice="19.50" />
      <MenuItem itemNumber="34" itemName="Sliced Beef in Curry Sauce" itemPrice="19.50" />
      <MenuItem itemNumber="35" itemName="Sliced Beef in Satay Sauce" itemPrice="21.50" />
      <MenuItem itemNumber="36" itemName="Sliced Beef in Oyster Sauce" itemPrice="19.50" />
    </div>
  );
};

export default Beef;
