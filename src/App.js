import React from "react";
import { Element } from "react-scroll";

import Header from "./components/header/header.component";
import Featured from "./components/featured/featured.component";
import FashionInfo from "./components/fashion-info/fashion-info.component";
import Highlights from "./components/highlights/highlights.component";
import Pricing from "./components/pricing/pricing.component";
import Location from "./components/location/location.component";
import Footer from "./components/footer/footer.component";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
        <Featured />
      </Element>

      <Element name="fashion">
        <FashionInfo />
      </Element>

      <Element name="highlights">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
