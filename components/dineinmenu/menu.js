import React from "react";

import Entree from "./entree";
import Soup from "./soup";
import Banquet from "./banquet";
import TopLineSelections from "./toplineselections";
import SpecialtiesHouse from "./specialtieshouse.js";
import Chicken from "./chicken";
import Beef from "./beef";
import BBQPork from "./bbqpork";
import Fish from "./fish";
import KingPrawn from "./kingprawn";
import Scallops from "./scallop";
import Duck from "./duck";
import SweetSour from "./sweetsour";
import Omelette from "./omelette";
import Childrens from "./childrens";
import Rice from "./rice";
import Desserts from "./desserts";
import { Badge } from "react-bootstrap";

var Scroll = require("react-scroll");
var Element = Scroll.Element;

const DineInMenu = () => {
  return (
    <div className="Component">
      <div className="container menu">
        <Element name="menu">
          <div className="section-header">
            <h2>Dine-in Menu</h2>
            <p className="subtitle">Enjoy the atmosphere — served at your table</p>
          </div>
        </Element>
        <div className="menu-info-bar">
          <span>
            <Badge bg="warning" style={{ marginRight: "0.3rem" }}>
              GF
            </Badge>{" "}
            Gluten Free
          </span>
          <span>
            <Badge bg="warning" style={{ marginRight: "0.3rem" }}>
              V
            </Badge> Vegetarian
          </span>
        </div>
        <p className="menu-info-text">
          Food Allergies — Please advise staff. This restaurant cannot be held responsible.
        </p>
        <p className="menu-info-text">Prices include GST and are subject to change without notice.</p>
        <Entree />
        <Soup />
        <Banquet />
        <TopLineSelections />
        <SpecialtiesHouse />
        <KingPrawn />
        <Scallops />
        <Beef />
        <Chicken />
        <BBQPork />
        <SweetSour />
        <Fish />
        <Duck />
        <Omelette />
        <Rice />
        <Childrens />
        <Desserts />
      </div>
    </div>
  );
};

export default DineInMenu;