import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// শপিং ব্যাগ আইকন (SVG)
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

// ProductCard কম্পোনেন্ট: একটি `product` অবজেক্ট prop হিসেবে গ্রহণ করে
const ProductCard = ({ product }) => {
  // যদি কোনো কারণে product ডেটা না থাকে, তাহলে কিছুই রেন্ডার হবে না
  if (!product) {
    return null;
  }

  // Quick Shop বাটনে ক্লিক করলে ডিটেইলস পেজে যাওয়া আটকানোর জন্য
  const handleQuickShopClick = (e) => {
    e.preventDefault(); // <Link>-এর ডিফল্ট আচরণ (পেজ পরিবর্তন) বন্ধ করে
    e.stopPropagation(); // ইভেন্ট bubbling বন্ধ করে

    // এখানে আপনি Quick View Modal খোলা বা সরাসরি কার্টে যোগ করার লজিক লিখতে পারেন
    console.log(`Quick Shop clicked for: ${product.item_name}`);
  };

  return (
    // সম্পূর্ণ কার্ডটিকে একটি ক্লিকেবল লিঙ্ক বানানো হয়েছে
    // এটি ব্যবহারকারীকে প্রোডাক্টের ডিটেইলস পেজে নিয়ে যাবে
    <Link
      to={`/productDetails/${product._id}`}
      className="block text-left group"
    >
      {/* ছবির কন্টেইনার */}
      <div className="relative bg-[#F8F8F8] p-4 rounded-md overflow-hidden">
        {/* প্রোডাক্টের ছবি */}
        <img
          src={product.image}
          alt={product.item_name}
          className="object-cover w-full transition-transform duration-300 rounded-md h-80 group-hover:scale-105"
        />

        {/* Quick Shop বাটন (হোভার করলে দেখা যাবে) */}
        <button
          onClick={handleQuickShopClick}
          className="absolute p-3 transition-opacity duration-300 bg-white rounded-full shadow-md opacity-0 bottom-4 right-4 group-hover:opacity-100 hover:bg-gray-100"
          aria-label="Quick Shop"
        >
          <ShoppingBagIcon />
        </button>
      </div>

      {/* প্রোডাক্টের তথ্য */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {product.item_name}
        </h3>
        <p className="text-gray-500">
          from ${product.price?.toFixed(2) || "N/A"}
        </p>
      </div>
    </Link>
  );
};

// PropTypes দিয়ে props ভ্যালিডেট করা হচ্ছে
ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    item_name: PropTypes.string.isRequired,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
