import { useEffect, useState } from "react";
import Products from "../Products/Products";
import Product from "../Product/Product";

const AllTouristsSpot = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    fetch("https://tripbd-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const sortData = (sortBy) => {
    let sortData = [...products];
    if (sortBy === "average_cost") {
      sortData.sort(
        (a, b) => parseInt(b.average_cost) - parseInt(a.average_cost)
      );
    }
    setProducts(sortData);
  };

  return (
    <>
      <div className="container mx-auto">
        <div>
          <div>
            <h1>this is all torous sport</h1>
          </div>
          {/* sort function */}
          <div className="flex text-center items-center justify-center mb-16">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                Sort by Average cost
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a onClick={() => sortData("average_cost")}>
                    Average Cost Ascending
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 ">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTouristsSpot;
