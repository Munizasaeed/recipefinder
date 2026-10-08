
import { useContext } from "react";
import Navbar from "../components/Navbar";
import FavoritesContext from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
  <div className="flex flex-col items-center justify-center text-center py-24">

    <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-5">
      <FontAwesomeIcon
        icon={solidHeart}
        className="text-orange-500 text-3xl"
      />
    </div>

    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
      No Favorites Yet
    </h3>

    <p className="text-gray-500 max-w-md mb-6">
      You haven't saved any recipes yet. Start exploring and save
      your favorite meals here.
    </p>

    <Link
      to="/"
      className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-orange-600 transition duration-200"
    >
      Explore Recipes
      <FontAwesomeIcon icon={faArrowRight} />
    </Link>

  </div>
) : (
            <div className="grid grid-cols-1 mt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

              {favorites.map((recipe) => (

                <div
                  key={recipe.idMeal}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-orange-400 hover:border-orange-400 transition duration-300"
                >

                  {/* Recipe Image */}
                  <div className="relative">

                    <img
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                      className="w-full h-56 object-cover"
                    />

                    {/* Remove Favorite */}
                    <button
                      onClick={() => handleRemove(recipe.idMeal)}
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-sm cursor-pointer transition duration-200 hover:scale-110"
                    >
                      <FontAwesomeIcon
                        icon={solidHeart}
                        className="text-red-500"
                      />
                    </button>

                  </div>

                  {/* Recipe Information */}
                  <div className="p-5 flex flex-col">

                    <h2 className="text-xl font-semibold mb-4">
                      {recipe.strMeal}
                    </h2>

                    <Link
                      to={`/recipe/${recipe.idMeal}`}
                      className="w-full inline-flex items-center justify-center gap-2 border border-orange-500 text-orange-500 px-5 py-2.5 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition duration-200 mt-auto"
                    >
                      View Recipe
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>

                  </div>

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
