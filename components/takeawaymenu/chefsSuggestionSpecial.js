import React from "react";
import MenuItem from "./menuItem";

const ChefsSuggestionSpecial = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">Chef&apos;s Suggestion Special 厨师推荐特辑</h3>
      <MenuItem itemNumber="14" itemName="Mongolian Lamb" itemPrice="23.50" />
      <MenuItem itemNumber="15" itemName="Pork Ribs with Chef's Special Sauce or Plum Sauce" itemPrice="22.50" />
      <MenuItem itemNumber="16" itemName="Honey Chicken" itemPrice="20.00" />
      <MenuItem itemNumber="17" itemName="Combination Seafood" itemPrice="25.00" />
      <MenuItem itemNumber="18" itemName="Sze Chun Chicken (Chilli bean sauce, hot)" itemPrice="22.00" />
    </div>
  );
};

export default ChefsSuggestionSpecial;
