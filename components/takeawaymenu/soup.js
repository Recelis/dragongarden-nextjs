import React from "react";
import MenuItem from "./menuItem";

const Soup = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">Soup 汤</h3>
      <MenuItem itemNumber="6" itemName="Sweet Corn with Minced Chicken Soup" itemPrice="8.00" />
      <MenuItem itemNumber="7" itemName="Sweet Corn with Crab Meat Soup" itemPrice="9.50" />
      <MenuItem itemNumber="8" itemName="Chicken and Mushroom Soup" itemPrice="9.50" />
      <MenuItem itemNumber="9" itemName="Long Soup (noodle)" itemPrice="8.00" />
      <MenuItem itemNumber="10" itemName="Short Soup (wonton)" itemPrice="8.50" />
      <MenuItem itemNumber="11" itemName="Combination Long Soup (noodle)" itemPrice="16.00" />
      <MenuItem itemNumber="12" itemName="Combination Short Soup (wonton)" itemPrice="16.00" />
      <MenuItem itemNumber="13" itemName="Combination Soup" itemPrice="9.50" />
    </div>
  );
};

export default Soup;
