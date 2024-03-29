import React from "react";
import MenuItem from "./menuItem";

const Desserts = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">Desserts 甜点</h3>
      <MenuItem itemNumber="89" itemName="Banana Split" itemPrice="10.00" />
      <MenuItem itemNumber="90" itemName="Deep Fried Ice Cream" itemPrice="12.00" />
      <MenuItem itemNumber="91" itemName="Lychees and Ice Cream" itemPrice="10.00" />
      <MenuItem itemNumber="92" itemName="Banana Fritter with Ice Cream" itemPrice="10.50" />
      <MenuItem itemNumber="93" itemName="Pineapple Fritter with Ice Cream" itemPrice="10.50" />
      <MenuItem
        itemNumber="94"
        itemName="Dragon Garden Ice Cream (Double Scoop Ice Cream and Marshmallow with Topping)"
        itemPrice="10.50"
      />
    </div>
  );
};

export default Desserts;
