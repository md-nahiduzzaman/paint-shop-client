import EmailSubscription from "../../components/EmailSubscription/EmailSubscription";
import Gallery from "../../components/Gallery/Gallery";

import ArtCategories from "../ArtCategories/ArtCategories";

import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import QuoteSection from "../../components/QuoteSection/QuoteSection";
import FeaturedProducts from "../../components/FreaturedProducts/FreaturedProducts";
import CountdownBanner from "../../components/CountdownBanner/CountdownBanner";
import ValueProps from "../../components/ValueProps";
import About from "../../components/About";
import PhotoGallery from "../../components/PhotoGallery";
import Newsletter from "../../components/Newsletter";

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

      <div>
        <About></About>
      </div>

      <div>
        <PhotoGallery></PhotoGallery>
      </div>

      <div>
        <Newsletter></Newsletter>
      </div>

      {/* <div className="mb-12 pt-28">
        <ArtCategories></ArtCategories>
      </div> */}

      {/* <div className="mb-12 pt-28">
        <Gallery></Gallery>
      </div> */}
    </div>
  );
};

export default Home;
