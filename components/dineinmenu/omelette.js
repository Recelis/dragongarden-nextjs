import React from "react";
import MenuItem from "./menuItem";

const Omelette = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">Omelette 蛋芙蓉</h3>
      <p className="my-0">
        <i>Served with light oyster and soy sauce</i>
      </p>
      <MenuItem itemNumber="78" itemName="Special Combination Omelette" itemPrice="24.00" />
      <MenuItem itemNumber="79" itemName="King Prawn Omelette" itemPrice="29.50" />
      <MenuItem itemNumber="80" itemName="Chicken Omelette" itemPrice="23.00" />
      <MenuItem itemNumber="81" itemName="Plain Omelette (Pea, Shallot, Onion)" itemPrice="17.50" itemTag="V/GF" />
    </div>
  );
};

export default Omelette;
