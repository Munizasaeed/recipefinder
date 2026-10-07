import { useContext } from "react";
import Navbar from "../components/Navbar";
import FavoritesContext from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
const Favorites = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const handleRemove = (id) => {
    setFavorites(favorites.filter((fav) => fav.idMeal !== id));
  };

  return (
    <div className="min-h-screen max-w-325 mx-auto flex flex-col bg-[#F9F6F0]">
      <Navbar />
      <main className="flex-1">
   <div className="px-4 mb-6 mt-5">
        <h2 className="text-2xl md:text-4xl text-orange-500 font-bold text-center mt-10 italic">
          Your Favorites
        </h2>

        {favorites.length === 0 ? (
          <p className="text-center mt-4 text-gray-500">
            No favorites yet. Go add some recipes you love!
          </p>
        ) : (
          <div className="grid grid-cols-1 mt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {favorites.map((recipe) => (
              <div key={recipe.idMeal} className="bg-white border border-gray-500 rounded-lg shadow-md p-4 flex flex-col">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h2 className="text-lg font-semibold">{recipe.strMeal}</h2>
                  <span
                    className=" cursor-pointer leading-none shrink-0 text-red-500"
                    onClick={() => handleRemove(recipe.idMeal)}
                  >
                    <FontAwesomeIcon icon={solidHeart}  style={{ fontSize: '20px' }}/>
                  </span>
                </div>
                <Link
                  to={`/recipe/${recipe.idMeal}`}
                  className="w-full bg-orange-500 text-white py-2 text-center rounded-md hover:bg-orange-600 mt-auto"
                >
                  View Recipe
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
  </main>
      
        <Footer />
    </div>
  
  );
};

export default Favorites;