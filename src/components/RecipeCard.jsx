
// import { useContext } from "react";
// import FavoritesContext from "../context/FavoritesContext";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

// const RecipeCard = ({ fetchRecipes }) => {
//   const { favorites, setFavorites } = useContext(FavoritesContext);

//   const handleFavoriteClick = (recipe) => {
//     const isFavorite = favorites.some(
//       (fav) => fav.idMeal === recipe.idMeal
//     );

//     if (isFavorite) {
//       setFavorites(
//         favorites.filter((fav) => fav.idMeal !== recipe.idMeal)
//       );
//     } else {
//       setFavorites([...favorites, recipe]);
//     }
//   };

//   return (
//     <div className="px-4 mb-6 mt-5">
//       <h2 className="text-2xl md:text-4xl text-orange-500 font-bold px-4 text-center">
//         Explore Recipes
//       </h2>

//       <p className="text-center mt-2 px-4 italic text-xl">
//         Discover delicious recipes and new meals from around the world!
//       </p>

//       <div className="grid grid-cols-1 mt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4">

//         {fetchRecipes
//           .filter((recipe) => recipe.strMeal.length <= 20)
//           .slice(0, 12)
//           .map((recipe) => (

//             <div
//               key={recipe.idMeal}
//               className="bg-white rounded-2xl border border-orange-400 hover:border-orange-400 overflow-hidden shadow-sm  "
//             >

//               {/* Recipe Image */}
//               <div className="relative">

//                 <img
//                   src={recipe.strMealThumb}
//                   alt={recipe.strMeal}
//                   loading="lazy"
//                   className="w-full h-56 object-cover"
//                 />

//                 {/* Favorite Button */}
//                 <button
//                   onClick={() => handleFavoriteClick(recipe)}
//                   className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-sm"
//                 >
//                   {favorites.some(
//                     (fav) => fav.idMeal === recipe.idMeal
//                   ) ? (
//                     <FontAwesomeIcon
//                       icon={solidHeart}
//                       className="text-red-500 hover:scale-120 transition duration-200"
//                     />
//                   ) : (
//                     <FontAwesomeIcon
//                       icon={regularHeart}
//                       className="text-gray-500 hover:scale-120 transition duration-200"
//                     />
//                   )}
//                 </button>

//               </div>

//               {/* Recipe Information */}
//               <div className="p-5">

//                 <h2 className="text-xl font-semibold mb-4">
//                   {recipe.strMeal}
//                 </h2>

//        <Link
//   to={`/recipe/${recipe.idMeal}`}
//   className="w-full inline-flex items-center justify-center gap-2 border border-orange-500 text-orange-500 px-5 py-2.5 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition duration-200"
// >
//   View Recipe
//   <FontAwesomeIcon icon={faArrowRight} />
// </Link>
//               </div>

//             </div>

//           ))}

//       </div>
//     </div>
//   );
// };

// export default RecipeCard;

import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faHeart as solidHeart, faClock, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const RecipeCard = ({ fetchRecipes }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const handleFavoriteClick = (e, recipe) => {
    e.stopPropagation();
    const isFavorite = favorites.some((fav) => fav.idMeal === recipe.idMeal);

    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.idMeal !== recipe.idMeal));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  const getDynamicTime = (id) => {
    const times = ["20 Mins", "25 Mins", "30 Mins", "35 Mins", "40 Mins"];
    const index = parseInt(id || "1", 10) % times.length;
    return times[index] || "25 Mins";
  };

  return (
    <div className="px-4 mb-6 bg-[#FAF8F5] mt-5">
      {/* Heading with Orange Color */}
      <h2 className="text-2xl md:text-4xl text-orange-600 font-bold px-4 text-center tracking-tight">
        Explore Recipes
      </h2>

      {/* Subtitle with Black Text */}
      <p className="text-center mt-2 px-4 italic text-lg text-black font-medium">
        Discover delicious recipes and new meals from around the world!
      </p>

      <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {fetchRecipes
          ?.filter((recipe) => recipe.strMeal && recipe.strMeal.length <= 30)
          .slice(0, 12)
          .map((recipe, index) => {
            const isFav = favorites.some((fav) => fav.idMeal === recipe.idMeal);
            const cookTime = recipe.strCookTime || getDynamicTime(recipe.idMeal);
            const recipeMeta = recipe.strCategory || recipe.strArea || "Global Taste";

            return (
              <motion.div
                key={recipe.idMeal}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: (index % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-orange-400 hover:border-orange-600 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer relative"
              >
                {/* Top Accent Highlight */}
                <div className="h-1 w-full bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 inset-x-0 z-20" />

                {/* Image Container */}
                <div className="relative overflow-hidden h-52 bg-gray-100">
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Category Pill Tag */}
                  {recipe.strCategory && (
                    <span className="absolute top-3 left-3 bg-[#2D4A3E]/85 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full shadow-sm z-10 border border-white/10">
                      {recipe.strCategory}
                    </span>
                  )}

                  {/* Heart Button */}
                  <motion.button
                    whileTap={{ scale: 0.75 }}
                    onClick={(e) => handleFavoriteClick(e, recipe)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white backdrop-blur-md flex items-center justify-center shadow-md cursor-pointer hover:bg-white transition duration-200 z-10 border border-gray-200"
                  >
                    <FontAwesomeIcon
                      icon={isFav ? solidHeart : regularHeart}
                      className={`text-base transition-colors duration-200 ${
                        isFav ? "text-red-600" : "text-black"
                      }`}
                    />
                  </motion.button>

                  {/* Glassmorphism Quick Info Overlay with Orange Icons */}
                  <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-md p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex justify-between items-center border-t border-gray-200 text-xs font-semibold text-black z-10">
                    <span className="flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faClock} className="text-orange-600" />
                      ~{cookTime}
                    </span>
                    <span className="flex items-center gap-1.5 truncate max-w-[120px]">
                      <FontAwesomeIcon icon={faGlobe} className="text-orange-600" />
                      {recipeMeta}
                    </span>
                  </div>
                </div>

                {/* Info Body */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <h3 
                    className="text-lg font-semibold text-black italic mb-4 line-clamp-1 group-hover:text-orange-600 transition-colors duration-200"
                    title={recipe.strMeal}
                  >
                    {recipe.strMeal}
                  </h3>

                  {/* Action Button */}
                  <Link
                    to={`/recipe/${recipe.idMeal}`}
                    className="w-full inline-flex items-center justify-center gap-2 border-2 border-orange-600 text-orange-600 px-5 py-2.5 rounded-xl font-semibold hover:bg-orange-600 hover:text-white active:scale-[0.98] transition-all duration-200 text-sm shadow-sm"
                  >
                    View Recipe
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default RecipeCard;