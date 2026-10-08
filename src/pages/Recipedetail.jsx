// import Footer from "../components/Footer";
// const Recipedetail = ({ details }) => {
//   // Helper function: ingredients + measurements ko ek array mein collect karta hai
//   const getIngredients = (recipe) => {
//     const ingredients = [];
//     for (let i = 1; i <= 20; i++) {
//       const ingredient = recipe[`strIngredient${i}`];
//       const measure = recipe[`strMeasure${i}`];
//       if (ingredient && ingredient.trim()) {
//         ingredients.push(`${measure} ${ingredient}`);
//       }
//     }
//     return ingredients;
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//        <main className="flex-1">
//    {details.map((recipe) => (
//         <div key={recipe.idMeal} className="max-w-4xl mx-auto px-4 py-8">
//           {/* Image + Title */}
//          <img
//   src={recipe.strMealThumb}
//   alt={recipe.strMeal}
//   className="w-full h-72 object-contain rounded-xl mb-5 bg-gray-50"
// />
//           <h1 className="text-3xl font-bold mb-3">{recipe.strMeal}</h1>

//           {/* Badges */}
//           <div className="flex gap-2 mb-6">
//             <span className="bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full">
//               {recipe.strCategory}
//             </span>
//             <span className="bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full">
//               {recipe.strArea}
//             </span>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Ingredients */}
//             <div className="md:col-span-1">
//               <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
//               <ul className="space-y-2">
//                 {getIngredients(recipe).map((item, index) => (
//                   <li key={index} className="text-gray-700 border-b border-gray-100 pb-2">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Instructions */}
//             <div className="md:col-span-2">
//               <h2 className="text-xl font-semibold mb-3 text-justify">Instructions</h2>
//               <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//                 {recipe.strInstructions}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//   </main>
//       <Footer />
//     </div>
//   )
// }

// export default Recipedetail

import Footer from "../components/Footer";

const Recipedetail = ({ details }) => {
  // Helper function: ingredients + measurements ko ek array mein collect karta hai
  const getIngredients = (recipe) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure ? measure.trim() : ""} ${ingredient.trim()}`);
      }
    }
    return ingredients;
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen flex flex-col justify-between">
      <main className="flex-1 py-10 px-4 md:px-8">
        {details &&
          details.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200/80 shadow-sm p-6 md:p-8 mb-8"
            >
              {/* Main Split Grid */}
              <div className="grid md:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Image + Badges (Sticky Header/Card) */}
                <div className="md:col-span-5 md:sticky md:top-6">
                  <div className="w-full aspect-4/3 md:aspect-square rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-4">
                    <img
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {recipe.strCategory && (
                      <span className="bg-orange-500/10 text-orange-600 border border-orange-500/20 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                        {recipe.strCategory}
                      </span>
                    )}
                    {recipe.strArea && (
                      <span className="bg-[#2D4A3E]/10 text-[#2D4A3E] border border-[#2D4A3E]/20 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                        {recipe.strArea}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Column: Title + Full Ingredients + Instructions */}
                <div className="md:col-span-7 flex flex-col">
                  {/* Title */}
                  <h1 className="text-2xl md:text-4xl font-bold text-[#2D4A3E] tracking-tight mb-6">
                    {recipe.strMeal}
                  </h1>

                  {/* Ingredients Section (No Scroll bar, Full List) */}
                  <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-gray-200/60 mb-6">
                    <h2 className="text-base font-bold text-[#2D4A3E] mb-3 pb-2 border-b border-gray-200">
                      Ingredients
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {getIngredients(recipe).map((item, index) => (
                        <li
                          key={index}
                          className="text-gray-700 text-xs md:text-sm font-medium flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-gray-100 shadow-2xs"
                        >
                          <span className="text-orange-500 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions Section */}
                  <div>
                    <h2 className="text-lg font-bold text-[#2D4A3E] mb-3">
                      Instructions
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line font-normal bg-[#FAF8F5]/50 p-5 rounded-2xl border border-gray-100">
                      {recipe.strInstructions}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
      </main>

      <Footer />
    </div>
  );
};

export default Recipedetail;