import React from "react";
import MenuItem from "./menuItem";

const KingPrawn = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">King Prawns 虾球</h3>
      <MenuItem itemNumber="40" itemName="Combination King Prawn" itemPrice="25.00" />
      <MenuItem itemNumber="41" itemName="King Prawn with Cashew Nuts (diced veges)" itemPrice="27.00" />
      <MenuItem itemNumber="42" itemName="King Prawn in Black Bean Sauce" itemPrice="25.00" />
      <MenuItem itemNumber="43" itemName="King Prawn in Curry Sauce" itemPrice="25.00" />
      <MenuItem itemNumber="44" itemName="King Prawn in Satay Sauce" itemPrice="26.00" />
      <MenuItem itemNumber="45" itemName="Honey King Prawn" itemPrice="26.00" />
      <MenuItem itemNumber="46" itemName="King Prawn in Garlic Sauce" itemPrice="26.00" />
    </div>
  );
};

export default KingPrawn;
