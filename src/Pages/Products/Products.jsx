import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      {/* section title */}
      <div className="text-center flex flex-col items-center">
        <h1 className="text-4xl font-bold w-[40%] mb-6">
          Explore Our Art Items Collection!
        </h1>
        <p className=" w-[60%] mb-10">
          Unlock endless crafting possibilities with our curated selection of
          craft items. From paints and brushes to sketch pads and more, we have
          everything you need to bring your artistic visions to life.
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 ">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
