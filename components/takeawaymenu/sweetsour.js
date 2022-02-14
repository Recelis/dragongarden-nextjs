import React from "react";
import MenuItem from "./menuItem";

const SweetSour = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">Sweet and Sour 糖醋</h3>
      <MenuItem itemNumber="59" itemName="Sweet and Sour Pork" itemPrice="17.50" />
      <MenuItem itemNumber="60" itemName="Sweet and Sour Chicken" itemPrice="17.50" />
      <MenuItem itemNumber="61" itemName="Sweet and Sour Fried Short Soup" itemPrice="17.50" />
      <MenuItem itemNumber="62" itemName="Sweet and Sour Scallop" itemPrice="24.00" />
      <MenuItem itemNumber="63" itemName="Sweet and Sour Fried King Prawn" itemPrice="24.00" />
      <MenuItem itemNumber="64" itemName="Sweet and Sour Fish" itemPrice="21.00" />
    </div>
  );
};

export default SweetSour;
