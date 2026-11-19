import React from "react";

const Footer = () => {
  return (
    <div className="footer-dragon">
      <div>
        <a
          href="https://www.facebook.com/DragonGardenRestaurant/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          Facebook
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()}. All Rights Reserved. Dragon Garden
        Family Restaurant Gympie
      </p>
    </div>
  );
};

export default Footer;