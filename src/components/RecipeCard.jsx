import { useContext, useEffect, useRef, useState } from "react";
import FavoritesContext from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

const RecipeItem = ({ recipe, favorites, handleFavoriteClick }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-gray-500 border border-gray-300 rounded-lg shadow-md p-4 flex flex-col ${
        isVisible ? "card-animation" : "opacity-0"
      }`}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        loading="lazy"
        className="w-full h-48 object-cover rounded-md mb-3"
      />

      <div className="flex items-center justify-between gap-2 mb-3">
        <h2 className="text-lg font-semibold">{recipe.strMeal}</h2>

        <span
          className="cursor-pointer shrink-0"
          onClick={() => handleFavoriteClick(recipe)}
        >
          {favorites.some((fav) => fav.idMeal === recipe.idMeal) ? (
            <FontAwesomeIcon
              icon={solidHeart}
              className="text-red-500 transition duration-200 hover:scale-110"
              style={{ fontSize: "20px" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={regularHeart}
              className="text-gray-400 transition duration-200 hover:scale-110"
              style={{ fontSize: "20px" }}
            />
          )}
        </span>
      </div>

      <Link
        to={`/recipe/${recipe.idMeal}`}
        className="w-full bg-orange-500 text-white py-2 text-center rounded-md hover:bg-orange-600 transition-colors duration-200 mt-auto"
      >
        View Recipe
      </Link>
    </div>
  );
};

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

      <div className="grid grid-cols-1 mt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {fetchRecipes
          .filter((recipe) => recipe.strMeal.length <= 20)
          .slice(0, 12)
          .map((recipe) => (
            <RecipeItem
              key={recipe.idMeal}
              recipe={recipe}
              favorites={favorites}
              handleFavoriteClick={handleFavoriteClick}
            />
          ))}
      </div>
    </div>
  );
};

export default RecipeCard;