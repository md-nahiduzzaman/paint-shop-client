import React from "react";
import { Link } from "react-router-dom";
// Importing all necessary icons
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaCcDiscover,
} from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

// Data for footer links remains organized for easy maintenance.
const footerData = {
  support: [
    { name: "Contact", href: "/contact" },
    { name: "Returns", href: "/returns" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "FAQ", href: "/faq" },
    { name: "About us", href: "/about" },
  ],
  browse: [
    { name: "All products", href: "/shop" },
    { name: "Bestsellers", href: "/collections/bestsellers" },
    { name: "Theme features", href: "/features" },
    { name: "Blog", href: "/blog" },
  ],
};

// Array for payment icons
const paymentIcons = [
  <FaCcVisa key="visa" size={28} />,
  <FaCcMastercard key="mastercard" size={28} />,
  <FaCcAmex key="amex" size={28} />,
  <FaCcPaypal key="paypal" size={28} />,
  <FaCcDiscover key="discover" size={28} />,
];

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white">
      <div className="container relative px-6 mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 py-16 text-sm md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Support</h4>
            <ul className="space-y-3">
              {footerData.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-black hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Browse</h4>
            <ul className="space-y-3">
              {footerData.browse.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-black hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">About</h4>
            <p className="leading-relaxed text-gray-600">
              This is a demonstration of the Venue theme for Shopify. You can
              buy beautiful images like these from our friends over at{" "}
              <a href="#" className="underline hover:text-black">
                Lisa Russo Fine Art
              </a>
              .
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Contact</h4>
            <a
              href="mailto:store@email.com"
              className="text-gray-600 hover:text-black hover:underline"
            >
              store@email.com
            </a>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-black"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-black"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="text-gray-600 hover:text-black"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={handleScrollToTop}
          className="absolute flex items-center justify-center w-12 h-12 text-white transition-colors bg-gray-600 rounded-full shadow-lg bottom-10 right-6 hover:bg-gray-700"
          aria-label="Scroll to top"
        >
          <IoChevronUp size={24} />
        </button>
      </div>

      {/* Bottom bar of the footer */}
      <div className="border-t border-gray-200">
        <div className="container flex flex-col items-center justify-between gap-4 px-6 py-6 mx-auto text-xs text-gray-500 md:flex-row">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="flex items-center gap-1 cursor-pointer hover:text-black">
              <span>United Kingdom (USD $)</span>
              <IoChevronDown size={16} />
            </div>
            <div className="flex items-center gap-2">
              {paymentIcons.map((icon) => icon)}
            </div>
          </div>

          <p>
            Powered by Shopify &copy; {new Date().getFullYear()}, Venue Theme
            Store
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
