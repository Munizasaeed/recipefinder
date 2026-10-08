import { Link } from "react-router-dom";
import { UtensilsCrossed, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">

      <div className="px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <UtensilsCrossed
              className="text-orange-500"
              size={34}
            />

            <p className="text-2xl md:text-3xl italic font-bold">
              Recipe<span className="text-orange-500"> Finder</span>
            </p>
          </div>

          <p className="text-gray-300 max-w-sm leading-relaxed">
            Discover delicious recipes and explore new meals from around
            the world. Find your next favorite dish with Recipe Finder.
          </p>
        </div>


        {/* Quick Links */}
        <div className="flex flex-col items-start md:items-center">
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <Link
              to="/"
              className="w-fit hover:text-orange-400 transition duration-200"
            >
              Home
            </Link>

            <Link
              to="/favorites"
              className="w-fit hover:text-orange-400 hover:underline transition duration-200"
            >
              Favorites
            </Link>

            <Link
              to="/"
              className="w-fit hover:text-orange-400 hover:underline transition duration-200"
            >
              About Us
            </Link>

            <Link
              to="/Contact"
              className="w-fit hover:text-orange-400 hover:underline transition duration-200"
            >
              Contact
            </Link>
          </div>
        </div>


        {/* Contact */}
        <div>
           <Link
              to="/Contact"
              className=" inline-block  w-fit text-orange-400 hover:text-orange-300 hover:underline  text-xl font-bold pb-5 transition duration-200"
            >
               Contact Us
            </Link>

          <div className="flex flex-col gap-4 text-gray-300">

            <a
              href="mailto:support@recipefinder.com"
              className="flex items-center gap-3 hover:text-orange-400 transition duration-200"
            >
              <Mail size={18} />
              <span>support@recipefinder.com</span>
            </a>

            <a
              href="tel:+15557324739"
              className="flex items-center gap-3 hover:text-orange-400 transition duration-200"
            >
              <Phone size={18} />
              <span>+1 555-RECIPE-X</span>
            </a>

          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="border-t border-gray-700">
        <p className="text-center text-sm text-gray-400 py-5">
          © 2026 Recipe Finder. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;