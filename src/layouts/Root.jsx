import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar2";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
