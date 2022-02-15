import React from "react";
import MenuItem from "./menuItem";

const SweetSour = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">Sweet and Sour 糖醋</h3>
      <MenuItem itemNumber="66" itemName="Sweet and Sour Fried Short Soup" itemPrice="21.00" />
      <MenuItem itemNumber="57" itemName="Sweet and Sour Pork" itemPrice="21.00" />
      <MenuItem itemNumber="68" itemName="Sweet and Sour Chicken" itemPrice="21.00" />
      <MenuItem itemNumber="69" itemName="Sweet and Sour Fried King Prawn" itemPrice="27.50" />
      <MenuItem itemNumber="70" itemName="Sweet and Sour Fish" itemPrice="22.00" />
    </div>
  );
};

export default SweetSour;
