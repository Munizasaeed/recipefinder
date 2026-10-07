import { Link } from "react-router-dom"
import {useContext} from 'react'
import FavoritesContext from "../context/FavoritesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
const Hero = ({ searchTerm, setSearchTerm, onSearch, searchResults,noResultsTerm,setNoResultsTerm, loading, error, lastSearchedTerm }) => {
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
    <section className="bg-[#F9F6F0] bg-cover bg-center py-16 px-6 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-4">Find Your Perfect Recipe</h1>
      <p className="text-lg sm:text-xl md:text-xl italic">
        Discover Delicious Recipes, explore new flavors and find your next favourite meal
      </p>

    <div className="mt-6 flex justify-center px-2">
  <div className="flex items-center w-full max-w-3xl border border-gray-300 rounded-2xl px-2 focus-within:ring-2 focus-within:ring-orange-500 transition duration-200">
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => { setSearchTerm(e.target.value); setNoResultsTerm(''); }}
      placeholder="Search for recipes..."
      className="flex-1 min-w-0 py-2 px-2 focus:outline-none"
    />
    <button onClick={onSearch} className="bg-orange-500 text-white py-1.5 px-3 sm:px-4 text-sm sm:text-base rounded-2xl hover:bg-orange-600 transition duration-200 ml-2 my-1 shrink-0">
      Search
    </button>
  </div>
</div>

      {/* Results */}
      <div className="mt-8">
        
        {loading &&  <div className="flex flex-col items-center justify-center py-10">
            <div className="w-20 h-20 border-8 border-gray-200 border-t-orange-500 rounded-full animate-spin"></div>
            <p className="mt-3 text-gray-500">Loading recipes...</p>
        </div>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && searchResults.length === 0  && noResultsTerm.trim() !== '' && (
          <p className="font-bold text-red-600 text-2xl">No results found for "{noResultsTerm}"</p>
        )}
        {!loading && !error && searchResults.length > 0 && (
          <>
             <h2 className="text-2xl font-semibold mb-4 text-left px-4"> Results for {lastSearchedTerm}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 text-left">
            {searchResults.map((recipe) => (
              <div key={recipe.idMeal} className="bg-white rounded-lg shadow-md p-4  flex flex-col">
                <img src={recipe.strMealThumb} alt={recipe.strMeal}  loading="lazy" className="w-full h-40 object-cover rounded-md mb-2" />
             <div className="flex items-start justify-between gap-2 mb-3">
            <h2 className="text-lg font-semibold">{recipe.strMeal}</h2>
            <span 
              className={` cursor-pointer leading-none shrink-0 self-center ${favorites.some((fav) => fav.idMeal === recipe.idMeal) ? 'text-red-500' : 'text-gray-300'}`}
              onClick={() => handleFavoriteClick(recipe)}
            >
              {favorites.some((fav) => fav.idMeal === recipe.idMeal) ? (
      <FontAwesomeIcon icon={solidHeart} className='text-red-500' style={{ fontSize: '20px' }} />
    ) : (
      <FontAwesomeIcon icon={regularHeart} className='text-gray-400' style={{ fontSize: '20px' }} />
    )}
            </span> 
          </div>
            <Link to={`/recipe/${recipe.idMeal}`} className="w-full bg-orange-500 px-6 text-white py-2 text-center rounded-md hover:bg-orange-600 mt-auto">
            View Recipe
          </Link>
              </div>
            ))}
          </div>
          </>
        )}
      </div>
      
    </section>
  );
};

export default Hero