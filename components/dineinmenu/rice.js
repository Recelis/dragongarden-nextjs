import React from "react";
import MenuItem from "./menuItem";

const Rice = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">Rice 饭</h3>
      <MenuItem itemNumber="82" itemName="Large Fried Rice with Prawns" itemPrice="13.50" />
      <MenuItem itemNumber="83" itemName="Small Fried Rice with Prawns" itemPrice="13.00" />
      <MenuItem itemNumber="84" itemName="Small Boiled Rice per Bowl" itemPrice="3.90" itemTag="GF" />
      <MenuItem itemNumber="84a" itemName="Large Boiled Rice per Bucket" itemPrice="11.00" itemTag="GF" />
      <MenuItem itemNumber="85" itemName="Special Fried Rice with BBQ Pork, Chicken and Prawns" itemPrice="16.50" />
    </div>
  );
};

export default Rice;
