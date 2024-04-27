import Banner from "../../components/Banner/Banner";
import EmailSubscription from "../../components/EmailSubscription/EmailSubscription";
import Gallery from "../../components/Gallery/Gallery";

import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Banner></Banner>
      </div>

      <Products></Products>

      <div className="mb-12">
        <EmailSubscription></EmailSubscription>
      </div>

      <div className="mb-12">
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
