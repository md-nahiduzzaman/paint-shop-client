import { Link } from "react-router-dom";
// Icons for the navbar
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import {
  IoChevronBack,
  IoChevronForward,
  IoChevronDown,
  IoPersonOutline,
  IoBagHandleOutline,
  IoSearchOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import React from "react";

// Organized navigation data for clean mapping in JSX
const mainNavLinks = [
  { name: "Store", href: "/store" },
  { name: "Collections", href: "/collections" },
  { name: "Demos", href: "/demos" },
  { name: "Theme Features", href: "/features" },
  { name: "Sale", href: "/sale", isSale: true },
];

const topBarLinks = {
  left: [
    { type: "icon", Icon: FaFacebookF, href: "#" },
    { type: "icon", Icon: FaInstagram, href: "#" },
    { type: "icon", Icon: FaTiktok, href: "#" },
    { type: "email", email: "store@email.com" },
  ],
  right: [
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Returns", href: "/returns" },
  ],
};

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="relative bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-[#857d76] text-white/80 text-sm hidden md:block">
        <div className="container flex items-center justify-between h-10 px-6 mx-auto">
          <div className="flex items-center gap-4">
            {topBarLinks.left.map((item, index) =>
              item.type === "icon" ? (
                <a key={index} href={item.href} className="hover:text-white">
                  <item.Icon size={16} />
                </a>
              ) : (
                <React.Fragment key={index}>
                  <span className="w-px h-4 bg-white/30"></span>
                  <a href={`mailto:${item.email}`} className="hover:text-white">
                    {item.email}
                  </a>
                </React.Fragment>
              )
            )}
          </div>
          <div className="flex items-center gap-2">
            <IoChevronBack />
            <span>Free shipping on orders over $100</span>
            <IoChevronForward />
          </div>
          <div className="flex items-center gap-4">
            {topBarLinks.right.map((link) => (
              <Link key={link.name} to={link.href} className="hover:text-white">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b">
        <div className="container flex items-center justify-between h-24 px-6 mx-auto">
          {/* Left Navigation Links (Desktop) */}
          <div className="items-center flex-1 hidden gap-6 md:flex">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold tracking-widest uppercase ${
                  link.isSale ? "text-red-500" : "text-gray-700"
                } hover:text-black`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold tracking-widest text-gray-800 uppercase"
            >
              logo
            </Link>
          </div>

          {/* Right Icons and Links (Desktop) */}
          <div className="items-center justify-end flex-1 hidden gap-6 md:flex">
            <div className="flex items-center gap-1 text-sm cursor-pointer hover:text-black">
              <span>United Kingdom (USD $)</span>
              <IoChevronDown />
            </div>
            <Link to="/account" aria-label="Account">
              <IoPersonOutline size={22} />
            </Link>
            <Link to="/cart" className="indicator" aria-label="Cart">
              <span className="indicator-item badge badge-xs badge-primary">
                0
              </span>
              <IoBagHandleOutline size={22} />
            </Link>
            <button aria-label="Search">
              <IoSearchOutline size={22} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <IoMenu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-white transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <IoClose size={32} />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-8 mt-10">
          {mainNavLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-semibold tracking-widest uppercase ${
                link.isSale ? "text-red-500" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
