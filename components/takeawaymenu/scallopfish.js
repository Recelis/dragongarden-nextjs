import React from "react";
import MenuItem from "./menuItem";

const ScallopFish = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">Scallops and Fish 扇贝和鱼</h3>
      <MenuItem itemNumber="47" itemName="Scallops with Black Bean Sauce" itemPrice="25.00" />
      <MenuItem itemNumber="48" itemName="Scallops with Vegetable" itemPrice="25.00" />
      <MenuItem itemNumber="49" itemName="Scallops in Oyster Sauce" itemPrice="25.00" />
      <MenuItem itemNumber="50" itemName="Scallops in Satay Sauce" itemPrice="26.00" />
      <MenuItem itemNumber="51" itemName="Fish in Ginger Shallot Sauce" itemPrice="23.00" />
      <MenuItem itemNumber="52" itemName="Fish in Black Bean Sauce" itemPrice="23.00" />
    </div>
  );
};

export default ScallopFish;
