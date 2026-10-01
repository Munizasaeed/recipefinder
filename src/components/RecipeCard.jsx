import { Link } from "react-router-dom"
const RecipeCard = ({fetchRecipes}) => {
  return (
    <div className="grid grid-cols-1 mt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {fetchRecipes.slice(0, 8).map((recipe) => (
        <div key={recipe.idMeal} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
          <img 
            src={recipe.strMealThumb} 
            alt={recipe.strMeal} 
            className="w-full h-48 object-cover rounded-md mb-3" 
          />
          <div className="flex items-start justify-between gap-2 mb-3">
            <h2 className="text-lg font-semibold">{recipe.strMeal}</h2>
            <span className="text-5xl cursor-pointer leading-none shrink-0 self-center">♡</span>
          </div>
          <Link to={`/recipe/${recipe.idMeal}`} className="w-full bg-orange-500 text-white py-2 text-center rounded-md hover:bg-orange-600 mt-auto">
            View Recipe
          </Link>
        </div>
      ))}
    </div>
  )
}

export default RecipeCard