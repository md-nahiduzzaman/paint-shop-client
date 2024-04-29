import Banner from "../../components/Banner/Banner";
import EmailSubscription from "../../components/EmailSubscription/EmailSubscription";
import Gallery from "../../components/Gallery/Gallery";
import Countries from "../Countries/Countries";
import ArtCategories from "../ArtCategories/ArtCategories";

import Products from "../Products/Products";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "CraftBD | Home";
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <Banner></Banner>
      </div>

      <div className="pt-28 ">
        <Products></Products>
      </div>

      <div className="pt-28 mb-12">
        <EmailSubscription></EmailSubscription>
      </div>

      <div className="pt-28 mb-12">
        <ArtCategories></ArtCategories>
      </div>

      <div className="pt-28 mb-12">
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
