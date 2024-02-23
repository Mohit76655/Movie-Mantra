import React from "react";
import "./home.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";

const Home = () => {
  return (
    <div className="">
      <HeroBanner />
      <Trending />
      <Popular />
    </div>
  );
};

export default Home;
