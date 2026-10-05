import {useContext} from 'react'
import FavoritesContext from '../context/FavoritesContext'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
const RecipeCard = ({fetchRecipes}) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const handleFavoriteClick = (recipe) => {
    const isFavorite = favorites.some((fav) => fav.idMeal === recipe.idMeal);
    if(isFavorite) {
      setFavorites(favorites.filter((fav) => fav.idMeal !== recipe.idMeal));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };
  return (
    <div className="px-4 mb-6 mt-5">
    <h2 className="text-2xl md:text-4xl text-orange-500 font-bold px-4 text-center ">Explore Recipes</h2>
    <p className="text-center mt-2 px-4 italic text-xl">Discover delicious recipes and new meals from around the world!</p>
    <div className="grid grid-cols-1 mt-7  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {fetchRecipes.slice(0, 12).map((recipe) => (
        <div key={recipe.idMeal} className="bg-white border border-gray-500 rounded-lg shadow-md p-4 flex flex-col">
          <img 
            src={recipe.strMealThumb} 
            alt={recipe.strMeal} 
            className="w-full h-48 object-cover rounded-md mb-3" 
          />
          <div className="flex items-start justify-between gap-2 mb-3">
            <h2 className="text-lg font-semibold">{recipe.strMeal}</h2>
            <span 
              className={`text-5xl cursor-pointer leading-none shrink-0 self-center ${favorites.some((fav) => fav.idMeal === recipe.idMeal) ? 'text-red-500' : 'text-gray-300'}`}
              onClick={() => handleFavoriteClick(recipe)}
            >
              {favorites.some((fav) => fav.idMeal === recipe.idMeal) ? (
                <FontAwesomeIcon icon={solidHeart} />
              ) : (
                <FontAwesomeIcon icon={regularHeart} />
              )}
            </span>
          </div>
          <Link to={`/recipe/${recipe.idMeal}`} className="w-full bg-orange-500 text-white py-2 text-center rounded-md hover:bg-orange-600 mt-auto">
            View Recipe
          </Link>
        </div>
      ))}
    </div>
    </div>
  )
}

export default RecipeCard