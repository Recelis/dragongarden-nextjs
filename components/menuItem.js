import React from "react";
import Badge from "react-bootstrap/Badge";

const MenuItem = (props) => {
  return (
    <div className="menu-item-row">
      <div>
        <span className="menu-item-number">{props.itemNumber}.</span>
        <span className="menu-item-name">{props.itemName}</span>
      </div>
      <div className="menu-item-right">
        <span className="menu-item-tag">
          {props.itemTag ? <Badge bg="warning">{props.itemTag}</Badge> : null}
        </span>
        <span className="menu-item-price">${props.itemPrice}</span>
      </div>
    </div>
  );
};

export default MenuItem;
