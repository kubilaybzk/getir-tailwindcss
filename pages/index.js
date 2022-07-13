import React from "react";
import Header from "components/Header";
import Hero from "components/Hero";
import Categories from "components/Categories";
import Download from "components/Download";
import Footer from "components/Footer";
import Offers from "components/Offers";
import SmallBoxs from "components/SmallBoxs";

export default function index() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Download />
      <Footer />
      <Offers />
      <SmallBoxs />
    </>
  );
}
