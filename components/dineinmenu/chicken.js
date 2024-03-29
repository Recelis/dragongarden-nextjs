import React from "react";
import MenuItem from "./menuItem";

const Chicken = () => {
  return (
    <div className="menu-category">
      <h3 className="menu-subheading">Chicken 鸡</h3>
      <MenuItem itemNumber="54" itemName="Fried Crispy Skin Chicken" itemPrice="22.00" itemTag="GF" />
      <MenuItem itemNumber="55" itemName="Braised Chicken with Cashew Nuts" itemPrice="23.50" />
      <MenuItem itemNumber="56" itemName="Braised Chicken with Vegetables" itemPrice="22.00" />
      <MenuItem itemNumber="57" itemName="Braised Chicken with Curry Sauce" itemPrice="22.50" />
      <MenuItem itemNumber="58" itemName="Braised Chicken with Black Bean Sauce" itemPrice="22.50" />
      <MenuItem itemNumber="59" itemName="Chilli Chicken Fillets" itemPrice="22.50" />
      <MenuItem itemNumber="60" itemName="Flaming Chicken in Satay Sauce" itemPrice="23.00" />
      <MenuItem itemNumber="61" itemName="Flaming Chicken with Special Sauce (Hoi Sin Sauce)" itemPrice="23.00" />
      <MenuItem itemNumber="62" itemName="Honey Chicken" itemPrice="22.00" />
    </div>
  );
};

export default Chicken;
