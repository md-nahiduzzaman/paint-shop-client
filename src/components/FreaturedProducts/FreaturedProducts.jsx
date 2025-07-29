import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://tripbd-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        {/* <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Featured Products
          </h2>
          <p className="mt-2 text-gray-600">
            A curated selection of our finest and most popular art pieces.
          </p>
        </div> */}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {/* <div className="flex justify-center gap-2 mt-12">
          <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedProducts;
