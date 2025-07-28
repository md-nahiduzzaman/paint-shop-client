import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // <-- react-router-dom থেকে Link import করুন

// একটি শপিং ব্যাগ আইকন (SVG)
const ShoppingBagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
    />
  </svg>
);

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API থেকে সব প্রোডাক্ট আনা হচ্ছে
    fetch("https://tripbd-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        {/* সেকশনের শিরোনাম */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Featured Products
          </h2>
          <p className="mt-2 text-gray-600">
            Discover a selection of our finest art pieces.
          </p>
        </div>

        {/* প্রোডাক্ট গ্রিড */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* .slice(0, 3) ব্যবহার করে শুধুমাত্র প্রথম ৩টি প্রোডাক্ট দেখানো হচ্ছে */}
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>

        {/* "View All" বাটন */}
        <div className="mt-16 text-center">
          {/* এই Link কম্পোনেন্টটি ব্যবহারকারীকে "/all-products" পেজে নিয়ে যাবে */}
          {/* আপনার রাউটিং অনুযায়ী "to" prop-এর ভ্যালু পরিবর্তন করুন (যেমন: "/shop" বা "/products") */}
          <Link to="/all-products" className="btn btn-primary btn-wide">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
