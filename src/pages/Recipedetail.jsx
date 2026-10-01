import Navbar from "../components/Navbar"

const Recipedetail = ({ details }) => {
  // Helper function: ingredients + measurements ko ek array mein collect karta hai
  const getIngredients = (recipe) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  return (
    <div>
      <Navbar />
      {details.map((recipe) => (
        <div key={recipe.idMeal} className="max-w-4xl mx-auto px-4 py-8">
          {/* Image + Title */}
         <img
  src={recipe.strMealThumb}
  alt={recipe.strMeal}
  className="w-full h-72 object-contain rounded-xl mb-5 bg-gray-50"
/>
          <h1 className="text-3xl font-bold mb-3">{recipe.strMeal}</h1>

          {/* Badges */}
          <div className="flex gap-2 mb-6">
            <span className="bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full">
              {recipe.strCategory}
            </span>
            <span className="bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full">
              {recipe.strArea}
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ingredients */}
            <div className="md:col-span-1">
              <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
              <ul className="space-y-2">
                {getIngredients(recipe).map((item, index) => (
                  <li key={index} className="text-gray-700 border-b border-gray-100 pb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-3 text-justify">Instructions</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {recipe.strInstructions}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Recipedetail