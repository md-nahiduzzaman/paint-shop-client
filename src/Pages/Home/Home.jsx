import Banner from "../../components/Banner/Banner";
import EmailSubscription from "../../components/EmailSubscription/EmailSubscription";
import Gallery from "../../components/Gallery/Gallery";
import Countries from "../Countries/Countries";
import ArtCategories from "../ArtCategories/ArtCategories";

import Products from "../Products/Products";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import QuoteSection from "../../components/QuoteSection/QuoteSection";
import FeaturedProducts from "../../components/FreaturedProducts/FreaturedProducts";
import CountdownBanner from "../../components/CountdownBanner/CountdownBanner";
import ValueProps from "../../components/ValueProps";

const Home = () => {
  useEffect(() => {
    document.title = "PaintShop | Home";
  }, []);

  return (
    <div className="bg-white">
      {/* <div>
        <Banner></Banner>
      </div> */}
      <div>
        <Hero></Hero>
      </div>

      <div>
        <QuoteSection></QuoteSection>
      </div>

      <div>
        <FeaturedProducts></FeaturedProducts>
      </div>

      <div>
        <CountdownBanner></CountdownBanner>
      </div>

      {/* <div className="pt-28 ">
        <Products></Products>
      </div> */}
      <div>
        <ValueProps></ValueProps>
      </div>

      <div className="mb-12 pt-28">
        <EmailSubscription></EmailSubscription>
      </div>

      <div className="mb-12 pt-28">
        <ArtCategories></ArtCategories>
      </div>

      <div className="mb-12 pt-28">
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
