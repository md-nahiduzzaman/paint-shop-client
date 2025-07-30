import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Import necessary icons
import {
  IoFlashOutline,
  IoShieldCheckmarkOutline,
  IoImagesOutline,
  IoRibbonOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";

import ProductCard from "../../components/ProductCard/ProductCard"; // Assuming you have a ProductCard component
// --- MOCK DATA for sections not in your API response ---
// In a real application, this data should ideally be part of the fetched product object.
const keyFeaturesData = [
  "Diverse Selection: Choose from a wide range of prints.",
  "Premium Quality: Crafted with high-quality materials.",
  "Customization: Tailor your prints with various sizes and framing options.",
];

const accordionData = [
  {
    icon: <IoImagesOutline size={22} />,
    title: "Photo sizes",
    content:
      "We believe that every piece of art deserves to shine in its own unique way. That's why we offer a range of our stunning photography products. Finding the perfect fit for your space has never been easier!",
  },
  {
    icon: <IoRibbonOutline size={22} />,
    title: "Our quality promise",
    content:
      "Our website is 100% verified and all transaction and customer info is securely encrypted with the latest technology.",
  },
  {
    icon: <IoChatbubblesOutline size={22} />,
    title: "Frequently asked",
    content:
      "You can return merchandise from your original order 30 days after the date for FREE. Excludes International Orders and items marked Final Sale.",
  },
];

const mockRelatedProducts = [
  {
    _id: "rel1",
    image: "https://i.imgur.com/tYp2pSM.png",
    item_name: "Adrift",
    price: 25.0,
    stockStatus: "In Stock",
  },
  {
    _id: "rel2",
    image: "https://i.imgur.com/gKj3D1D.png",
    item_name: "Apple Harvest",
    price: 35.0,
    stockStatus: "Made to Order",
  },
];
// --- END MOCK DATA ---

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://tripbd-server.vercel.app/productDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        document.title = `PaintShop | ${data.item_name}`;

        const imageGallery = [
          data.image,
          "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=800",
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800",
        ];
        setProductImages(imageGallery);
        setActiveImage(data.image);
      })
      .catch((error) => console.error("Error fetching product details:", error))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!product) {
    return <div className="py-20 text-center">Product not found.</div>;
  }

  return (
    <div className="bg-white">
      <main className="container px-6 py-8 mx-auto">
        {/* Breadcrumbs */}
        <div className="mb-8 text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/category/${product.subcategory_Name}`}>
                {product.subcategory_Name}
              </Link>
            </li>
            <li>{product.item_name}</li>
          </ul>
        </div>

        {/* Main Product Layout: Image Gallery + Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {/* Left Column: Image Gallery */}
          <div>
            <div className="mb-4">
              <img
                src={activeImage}
                alt={product.item_name}
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`rounded-md overflow-hidden border-2 ${
                    activeImage === img ? "border-black" : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-auto"
                  />
                </button>
              ))}
            </div>

            {/* --- NEW: Detailed Info Section (moved to left column) --- */}
            <div className="py-10 mt-12 border-t">
              <p className="leading-relaxed text-gray-600">
                {product.short_description}
              </p>

              <div className="mt-8">
                <h3 className="mb-3 text-lg font-semibold">Key Features:</h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  {keyFeaturesData.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                <span>Tags: </span>
                <Link to="#" className="underline hover:text-black">
                  Bestseller
                </Link>{" "}
                /{" "}
                <Link to="#" className="underline hover:text-black">
                  Farmhouse
                </Link>
              </div>

              {/* Accordion Section using DaisyUI Collapse */}
              <div className="mt-8 space-y-2">
                {accordionData.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 rounded-none collapse collapse-plus"
                  >
                    <input
                      type="radio"
                      name="product-accordion"
                      defaultChecked={index === 0}
                    />
                    <div className="flex items-center gap-3 font-semibold collapse-title text-md">
                      {item.icon} {item.title}
                    </div>
                    <div className="collapse-content">
                      <p className="text-sm text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Product Actions */}
          <div>
            {/* Countdown timer can be a separate component if needed */}
            <div className="p-6 mb-6 text-center bg-gray-100 rounded-lg">
              <p className="mb-2 font-semibold text-gray-700">
                Order now - in stock soon!
              </p>
              <div className="flex items-center justify-center gap-4">
                <div>
                  <span className="font-mono text-4xl">07</span>
                  <span className="block text-xs">HOURS</span>
                </div>{" "}
                <span className="text-4xl">:</span>
                <div>
                  <span className="font-mono text-4xl">28</span>
                  <span className="block text-xs">MINUTES</span>
                </div>{" "}
                <span className="text-4xl">:</span>
                <div>
                  <span className="font-mono text-4xl">55</span>
                  <span className="block text-xs">SECONDS</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="badge badge-success badge-outline">
                PRE-ORDER
              </span>
              <span className="badge badge-neutral">BESTSELLER</span>
            </div>

            <h1 className="mb-2 text-4xl font-semibold text-gray-800">
              {product.item_name}
            </h1>
            <p className="mb-4 text-2xl text-gray-700">
              ${parseFloat(product.price).toFixed(2)}
            </p>

            <div className="flex items-center gap-3 p-3 mb-6 text-sm text-gray-600 rounded-lg bg-gray-100/60">
              <IoFlashOutline size={20} />
              <span>Order today - back in stock 7-10 days</span>
            </div>

            <div className="w-full mb-6 form-control">
              <label className="label">
                <span className="label-text">Size</span>
              </label>
              <select className="select select-bordered">
                <option>8x10 Photo Print</option>
              </select>
            </div>

            <button className="text-lg text-white bg-gray-700 rounded-full btn hover:bg-gray-800 btn-block h-14">
              Pre-order
            </button>

            {/* "Goes Well With" & "Shop with Confidence" sections */}
            <div className="mt-12">
              <h3 className="mb-4 text-xl font-semibold text-center">
                Goes well with
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {mockRelatedProducts.map((p) => (
                  <ProductCard key={p._id} product={p} />
                ))}
              </div>
            </div>

            <div className="p-6 mt-12 rounded-lg bg-gray-100/60">
              <h4 className="mb-4 text-lg font-semibold text-center">
                Shop with confidence
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <IoShieldCheckmarkOutline /> Fast shipping
                </p>
                <p className="flex items-center gap-2">
                  <IoShieldCheckmarkOutline /> Easy exchanges
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaCcVisa size={32} /> <FaCcMastercard size={32} />{" "}
                <FaCcAmex size={32} /> <FaCcPaypal size={32} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailsPage;
