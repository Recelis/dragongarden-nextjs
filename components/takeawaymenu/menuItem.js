import React from "react";
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";

const MenuItem = (props) => {
  return (
    <div className="row">
      <div className="col-11 d-flex justify-content-between">
        <div>
          <span className="mx-1">{props.itemNumber}.</span>
          <span>{props.itemName}</span>
        </div>
        <span>${props.itemPrice}</span>
      </div>
      {props.itemTag ? (
        <div className="col-1">
          <Badge bg="warning" className="text-dark">
            {props.itemTag}
          </Badge>
        </div>
      ) : (
        <div className="col-1"></div>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  itemNumber: PropTypes.string,
  itemName: PropTypes.string,
  itemTag: PropTypes.string,
};

MenuItem.defaultProps = {
  itemNumber: "",
  itemName: "",
  itemTag: "",
};

export default MenuItem;
