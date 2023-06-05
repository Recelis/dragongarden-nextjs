import React from "react";
import MenuItem from "./menuItem";

const Rice = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">Rice 饭</h3>
      <MenuItem itemNumber="79" itemName="Combination with Rice" itemPrice="22.50" />
      <MenuItem itemNumber="80" itemName="Curry Prawn with Rice" itemPrice="21.50" itemTag="GF" />
      <MenuItem itemNumber="81" itemName="Curry Chicken with Rice" itemPrice="20.50" />
      <MenuItem itemNumber="82" itemName="Curry Beef with Rice" itemPrice="20.50" />
      <MenuItem itemNumber="83" itemName="Large Special Fried Rice" itemPrice="14.90" />
      <MenuItem itemNumber="84" itemName="Small Fried Rice" itemPrice="11.50" />
      <MenuItem itemNumber="84a" itemName="Large Fried Rice" itemPrice="12.50" />
      <MenuItem itemNumber="85" itemName="Small Boiled Rice" itemPrice="4.50" itemTag="GF" />
      <MenuItem itemNumber="85a" itemName="Large Boiled Rice" itemPrice="6.00" itemTag="GF" />
      <MenuItem itemNumber="86" itemName="Mixed Vegetables (Garlic or Oyster Sauce)" itemPrice="16.50" />
      <MenuItem itemNumber="87" itemName="Vegetable Fried Rice with Egg" itemPrice="12.50" />
    </div>
  );
};

export default Rice;
