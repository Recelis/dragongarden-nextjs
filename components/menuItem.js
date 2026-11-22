import React from "react";
import Badge from "react-bootstrap/Badge";

const MenuItem = (props) => {
  return (
    <div className="menu-item-row">
      <div>
        <span className="menu-item-number">{props.itemNumber}.</span>
        <span className="menu-item-name">{props.itemName}</span>
      </div>
      <div>
        {props.itemTag ? (
          <Badge bg="warning" style={{ marginRight: "0.5rem" }}>
            {props.itemTag}
          </Badge>
        ) : null}
        <span className="menu-item-price">${props.itemPrice}</span>
      </div>
    </div>
  );
};

export default MenuItem;
