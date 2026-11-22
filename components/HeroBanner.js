import React from "react";
var Scroll = require("react-scroll");
var Element = Scroll.Element;

const HeroBanner = () => {
  const heroImage = './DragonGardenPic.jpg';

  return (
    <Element name="hero">
      <div className="hero-section">
        <img src={heroImage} alt="Dragon Garden Restaurant" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <img src="/logo.png" alt="Dragon Garden Logo" className="hero-logo" />
          <h1 className="hero-title">Dragon Garden Family Restaurant</h1>
          <p className="hero-subtitle">龙苑大酒家欢迎您品尝我们的传统中式佳肴</p>
          <p className="hero-tagline">Traditional Chinese Cuisine — Serving Gympie Since 1983</p>
          <div className="hero-cta">
            <a href="tel:0754825700" className="btn btn-danger btn-lg rounded-pill px-4 fw-bold">
              📞 Call to Book
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("menu-section").scrollIntoView({ behavior: "smooth" });
              }}
              className="btn btn-outline-warning btn-lg rounded-pill px-4 fw-bold"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default HeroBanner;