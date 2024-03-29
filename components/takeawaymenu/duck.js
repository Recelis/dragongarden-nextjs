import React from "react";
import MenuItem from "./menuItem";

const Duck = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">Duck 鸭</h3>
      <MenuItem itemNumber="53" itemName="Steamed Duck with Mushroom" itemPrice="29.00" itemTag="GF" />
      <MenuItem itemNumber="54" itemName="Steamed Duck with Assorted Meat" itemPrice="31.00" />
      <MenuItem itemNumber="55" itemName="Steamed Duck with Vegetable" itemPrice="29.00" itemTag="GF" />
      <MenuItem itemNumber="56" itemName="Deep Fried Duck in Lemon Sauce (boneless)" itemPrice="29.00" />
      <MenuItem itemNumber="57" itemName="Deep Fried Duck in Sweet & Sour Sauce (boneless)" itemPrice="29.00" />
      <MenuItem itemNumber="58" itemName="Deep Fried Duck in Plum Sauce" itemPrice="29.00" />
    </div>
  );
};

export default Duck;
