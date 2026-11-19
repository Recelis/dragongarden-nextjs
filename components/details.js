import React from "react";

const Details = () => {
  return (
    <div className="section-dragon section-dragon-alt contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p className="subtitle">Call or visit &mdash; we&apos;d love to hear from you</p>
        </div>
        <div className="contact-item">
          📍{" "}
          <a
            href="https://www.google.com/maps/dir//-26.1915088,152.6566924/@-26.191509,152.656692,18z?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            18 Wickham Street, Bruce Highway, GYMPIE
          </a>
          <br />
          <span style={{ opacity: 0.6, fontSize: "0.9rem" }}>
            (Opposite Super Cheap Auto)
          </span>
        </div>
        <div className="contact-item">
          📞 Phone:{" "}
          <a href="tel:0754825700" className="phone-number">
            (07) 5482 5700
          </a>
        </div>
        <div className="contact-item">
          📱 Mobile:{" "}
          <a href="tel:+61-413-889-889">0413 889 889</a> (Douglas)
        </div>
        <div className="contact-item">
          👍 Like us on{" "}
          <a
            href="https://www.facebook.com/DragonGardenRestaurant"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;