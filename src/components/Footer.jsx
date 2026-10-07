import { Link } from "react-router-dom";
import { UtensilsCrossed} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gray-800 flex flex-col gap-5 md:flex-row text-white py-10 justify-around">
      <div className="flex flex-col ml-10 gap-2">
        <div className="flex  items-center gap-2">
               <UtensilsCrossed className="text-orange-500" size={36} />
               <p className="text-base sm:text-lg md:text-3xl italic font-bold leading-tight">
  Recipe<span className="block sm:inline"> Finder</span>
</p>
        </div>
        <p className="max-w-sm mx-auto mr-2">
  Discover delicious recipes and explore new meals from around the world!
</p>
      </div>
      <div className=" ml-10 flex flex-col gap-2">
          <p className="text-2xl font-bold text-orange-500">Quick Links</p>
            <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/">About Us</Link>
          <Link to="/Contact">Contact</Link>
      </div>
       <div className="ml-10 flex flex-col gap-2">
          <Link to="/Contact" className="text-xl font-bold text-orange-500">Contact</Link>
          <Link to="/Contact">Email Us</Link>
          <Link to="/Contact">Support</Link>
          <Link to="/Contact">FAQ</Link>
      </div>
    </div>
  )
}

export default Footer


