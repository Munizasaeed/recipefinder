import { useState } from "react";
import { UtensilsCrossed, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#2D4A3E] text-white px-4 sm:px-10 md:px-20 py-3 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="text-orange-500" size={28} />
          <p className="text-base sm:text-lg md:text-xl italic font-bold">Recipe Finder</p>
        </div>

        {/* Desktop Links - hidden on mobile, flex on md+ */}
        <div className="hidden md:flex items-center gap-6 italic text-xl">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/Contact">Contact</Link>
        </div>

        {/* Hamburger Icon - only visible on mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown - absolute positioned, floats over content */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#2D4A3E] flex flex-col gap-4 p-4 italic text-lg md:hidden shadow-lg z-50">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/favorites" onClick={() => setIsOpen(false)}>Favorites</Link>
          <Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;