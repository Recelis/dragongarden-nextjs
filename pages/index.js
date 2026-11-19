import React, { useState } from "react";
import Head from "next/head";

import Navigation from "../components/navigation";
import HeroBanner from "../components/HeroBanner";
import Welcome from "../components/welcome";
import Details from "../components/details";
import OpenHours from "../components/openHours";
import TakeAwayMenu from "../components/takeawaymenu/menu";
import DineInMenu from "../components/dineinmenu/menu";
import GoogleMaps from "../components/GoogleMaps";
import Footer from "../components/footer";

export default function Home() {
  const [menu, setMenu] = useState("takeaway");
  return (
    <div>
      <Head>
        <title>Dragon Garden Family Restaurant | Traditional Chinese Cuisine Gympie</title>
        <meta
          name="description"
          content="Dragon Garden Family Restaurant Gympie — Traditional Chinese Cuisine. Licensed, air conditioned, take away. Serving Gympie since 1983. (07) 5482 5700"
        />
        <meta name="keywords" content="Chinese restaurant Gympie, Dragon Garden, Chinese food Gympie, take away Gympie, dine-in Gympie" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Anton|Ma+Shan+Zheng&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Dragon Garden Family Restaurant Gympie" />
        <meta property="og:description" content="Traditional Chinese Cuisine — Licensed, Air Conditioned, Take Away. Serving Gympie since 1983." />
        <meta property="og:type" content="restaurant" />
        <meta property="og:url" content="https://www.dragongardenfamilyrestaurant.com/" />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Dragon Garden Family Restaurant Gympie" />
        <meta name="twitter:description" content="Traditional Chinese Cuisine — Serving Gympie since 1983." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Dragon Garden Family Restaurant",
              image: "https://www.dragongardenfamilyrestaurant.com/logo.png",
              url: "https://www.dragongardenfamilyrestaurant.com/",
              telephone: "+61754825700",
              servesCuisine: "Chinese",
              address: {
                "@type": "PostalAddress",
                streetAddress: "18 Wickham Street, Bruce Highway",
                addressLocality: "Gympie",
                addressRegion: "QLD",
                addressCountry: "AU",
              },
              priceRange: "$$",
              areaServed: "Gympie",
            }),
          }}
        />
      </Head>

      <main className="App" style={{ backgroundColor: "#FFF8E7" }}>
        <Navigation />
        <HeroBanner />

        <div className="section-dragon">
          <div className="badge-row">
            <span className="badge badge-dragon">LICENSED</span>
            <span className="badge badge-dragon">AIR CONDITIONED</span>
            <span className="badge badge-dragon">TAKE AWAY</span>
          </div>
          <Welcome />
        </div>

        <Details />
        <OpenHours />

        <div className="section-dragon section-dragon-alt" id="menu-section">
          <div className="section-header">
            <h2>Our Menu</h2>
            <p className="subtitle">Traditional Chinese dishes prepared fresh to order</p>
          </div>
          <div className="menu-toggle-bar">
            <button
              className={`btn ${menu === "takeaway" ? "btn-danger active" : "btn-outline-secondary"}`}
              onClick={() => setMenu("takeaway")}
            >
              🛍️ Take Away Menu
            </button>
            <button
              className={`btn ${menu === "dinein" ? "btn-danger active" : "btn-outline-secondary"}`}
              onClick={() => setMenu("dinein")}
            >
              🍽️ Dine-in Menu
            </button>
          </div>
          {menu === "takeaway" ? <TakeAwayMenu /> : <DineInMenu />}
        </div>

        <GoogleMaps />
        <Footer />
      </main>
    </div>
  );
}