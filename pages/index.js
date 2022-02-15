import React, { useState } from "react";
import Head from "next/head";

import Header from "../components/header";
import Details from "../components/details";
import Welcome from "../components/welcome";
import TakeAwayMenu from "../components/takeawaymenu/menu";
import DineInMenu from "../components/dineinmenu/menu";
import Footer from "../components/footer";
import OpenHours from "../components/openHours";
import { Button, ButtonGroup } from "react-bootstrap";

export default function Home() {
  const [{ menu }, setMenu] = useState({ menu: "takeaway" });
  return (
    <div>
      <Head>
        <title>Dragon Garden Family Restaurant Gympie</title>
        <meta name="description" content="Dragon Garden Restaurant Gympie" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Anton|Ma+Shan+Zheng&display=swap" rel="stylesheet" />
      </Head>

      <main className="App">
        <Header />
        <Welcome />
        <Details />
        <OpenHours />
        <div className="d-flex justify-content-center">
          <ButtonGroup>
            <Button
              variant="danger"
              onClick={() => {
                setMenu({ menu: "takeaway" });
              }}
              active={menu == "takeaway"}
            >
              Take Away Menu
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                setMenu({ menu: "dinein" });
              }}
              active={menu == "dinein"}
            >
              Dine-in Menu
            </Button>
          </ButtonGroup>
        </div>
        {menu === "takeaway" ? <TakeAwayMenu /> : <DineInMenu />}
        <hr />
        <Footer />
      </main>
    </div>
  );
}
