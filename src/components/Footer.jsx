import { Link } from "react-router-dom";
import { UtensilsCrossed, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2D4A3E] text-white">
      <div className=" px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <UtensilsCrossed
              className="text-orange-600"
              size={34}
            />

            <p className="text-2xl md:text-3xl italic font-bold">
              Recipe<span className="text-orange-600"> Finder</span>
            </p>
          </div>

          <p className="text-gray-300 max-w-sm leading-relaxed">
            Discover delicious recipes and explore new meals from around
            the world. Find your next favorite dish with Recipe Finder.
          </p>
        </div>

        {/* Quick Links (Positioned in Center Column, Left-aligned Text) */}
        <div className="md:mx-auto flex flex-col items-start">
          <h3 className="text-xl font-bold text-orange-600 mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <Link
              to="/"
              className="w-fit  hover:underline transition duration-200"
            >
              Home
            </Link>

            <Link
              to="/favorites"
              className="w-fit  hover:underline transition duration-200"
            >
              Favorites
            </Link>

            <Link
              to="/"
              className="w-fit  hover:underline transition duration-200"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="w-fit  hover:underline transition duration-200"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact Us */}
        <div className="">
          <h3 className="text-xl font-bold text-orange-600 mb-4">
            Contact Us
          </h3>

          <div className="flex flex-col gap-4 text-gray-300">
            <a
              href="mailto:support@recipefinder.com"
              className="flex items-center gap-3 hover:text-orange-400 hover:underline transition duration-200"
            >
              <Mail size={18} />
              <span>support@recipefinder.com</span>
            </a>

            <a
              href="tel:+15557324739"
              className="flex items-center gap-3 hover:text-orange-400 hover:underline transition duration-200"
            >
              <Phone size={18} />
              <span>+1 555-RECIPE-X</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <p className="text-center text-sm text-gray-300 py-5">
          © {new Date().getFullYear()} Recipe Finder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;