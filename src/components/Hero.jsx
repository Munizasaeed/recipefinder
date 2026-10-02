import { Link } from "react-router-dom"
const Hero = ({ searchTerm, setSearchTerm, setLastSearchedTerm, onSearch, searchResults, loading, error, lastSearchedTerm }) => {
  return (
    <section className="bg-[#F9F6F0] bg-cover bg-center py-16 px-6 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-4">Find Your Perfect Recipe</h1>
      <p className="text-lg sm:text-xl md:text-xl italic">
        Discover Delicious Recipes, explore new flavors and find your next favourite meal
      </p>

      <div className="mt-6 flex justify-center">
        <div className="flex items-center w-full max-w-3xl border border-gray-300 rounded-2xl px-2 focus-within:ring-2 focus-within:ring-orange-500">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setLastSearchedTerm(''); }}
            placeholder="Search for recipes..."
            className="flex-1 py-2 px-2 focus:outline-none"
          />
          <button onClick={onSearch} className="bg-orange-500 text-white py-1.5 px-4 rounded-2xl hover:bg-orange-600 ml-2 my-1">
            Search
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8">
        
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && searchResults.length === 0 && searchResults.length === 0 && lastSearchedTerm.trim() !== '' && (
          <p className="font-bold text-red-600 text-2xl">No results found for "{lastSearchedTerm}"</p>
        )}
        {!loading && !error && searchResults.length > 0 && (
          <>
             <h2 className="text-2xl font-semibold mb-4 text-left px-4"> Results for {lastSearchedTerm}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 text-left">
            {searchResults.map((recipe) => (
              <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal} className="bg-white rounded-lg shadow-md p-4">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-40 object-cover rounded-md mb-2" />
                <h3 className="font-semibold">{recipe.strMeal}</h3>
              </Link>
            ))}
          </div>
          </>
        )}
      </div>
      
    </section>
  );
};

export default Hero