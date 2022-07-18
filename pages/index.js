import React from "react";
import Header from "components/Header";
import Hero from "components/Hero";
import Categories from "components/Categories";
import Download from "components/Download";
import Footer from "components/Footer";
import Offers from "components/Offers";
import SmallBoxs from "components/SmallBoxs";
import Favorites from "components/Favorites";

export default function index() {
  return (
    <>
      <Header />
      <Hero />
      <Offers />
      <Categories />
      <Download />
      <Favorites />
      <SmallBoxs/>
      <Footer/>
    </>
  );
}
