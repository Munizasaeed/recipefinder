
import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

const RecipeCard = ({ fetchRecipes }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const handleFavoriteClick = (recipe) => {
    const isFavorite = favorites.some(
      (fav) => fav.idMeal === recipe.idMeal
    );

    if (isFavorite) {
      setFavorites(
        favorites.filter((fav) => fav.idMeal !== recipe.idMeal)
      );
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <div className="px-4 mb-6 mt-5">
      <h2 className="text-2xl md:text-4xl text-orange-500 font-bold px-4 text-center">
        Explore Recipes
      </h2>

      <p className="text-center mt-2 px-4 italic text-xl">
        Discover delicious recipes and new meals from around the world!
      </p>

      <div className="grid grid-cols-1 mt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4">

        {fetchRecipes
          .filter((recipe) => recipe.strMeal.length <= 20)
          .slice(0, 12)
          .map((recipe) => (

            <div
              key={recipe.idMeal}
              className="bg-white rounded-2xl border border-orange-400 hover:border-orange-400 overflow-hidden shadow-sm  "
            >

              {/* Recipe Image */}
              <div className="relative">

                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />

                {/* Favorite Button */}
                <button
                  onClick={() => handleFavoriteClick(recipe)}
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-sm"
                >
                  {favorites.some(
                    (fav) => fav.idMeal === recipe.idMeal
                  ) ? (
                    <FontAwesomeIcon
                      icon={solidHeart}
                      className="text-red-500 hover:scale-120 transition duration-200"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={regularHeart}
                      className="text-gray-500 hover:scale-120 transition duration-200"
                    />
                  )}
                </button>

              </div>

              {/* Recipe Information */}
              <div className="p-5">

                <h2 className="text-xl font-semibold mb-4">
                  {recipe.strMeal}
                </h2>

       <Link
  to={`/recipe/${recipe.idMeal}`}
  className="w-full inline-flex items-center justify-center gap-2 border border-orange-500 text-orange-500 px-5 py-2.5 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition duration-200"
>
  View Recipe
  <FontAwesomeIcon icon={faArrowRight} />
</Link>
              </div>

            </div>

          ))}

      </div>
    </div>
  );
};

export default RecipeCard;


