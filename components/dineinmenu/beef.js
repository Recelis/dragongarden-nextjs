import React from "react";
import MenuItem from "./menuItem";

const Beef = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">Beef 牛肉</h3>
      <MenuItem itemNumber="45" itemName="Pan Fried Shredded Fillet Steak in Bird's Nest" itemPrice="33.00" />
      <MenuItem itemNumber="46" itemName="Fillet Steak in Chinese Style" itemPrice="27.50" />
      <MenuItem itemNumber="47" itemName="Braised Beef with Cashew Nuts" itemPrice="23.50" />
      <MenuItem itemNumber="48" itemName="Braised Beef with Vegetables" itemPrice="22.00" />
      <MenuItem itemNumber="49" itemName="Braised Beef in Curry Sauce" itemPrice="22.50" />
      <MenuItem itemNumber="50" itemName="Braised Beef with Black Bean Sauce" itemPrice="22.50" />
      <MenuItem itemNumber="51" itemName="Braised Beef with Plum Sauce" itemPrice="23.00" />
      <MenuItem itemNumber="52" itemName="Braised Beef in Garlic Sauce" itemPrice="23.00" />
      <MenuItem itemNumber="53" itemName="Flaming Beef in Satay Sauce" itemPrice="23.00" />
    </div>
  );
};

export default Beef;
