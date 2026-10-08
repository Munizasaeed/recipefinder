
// import { useContext } from "react";
// import Navbar from "../components/Navbar";
// import FavoritesContext from "../context/FavoritesContext";
// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// const Favorites = () => {
//   const { favorites, setFavorites } = useContext(FavoritesContext);

//   const handleRemove = (id) => {
//     setFavorites(favorites.filter((fav) => fav.idMeal !== id));
//   };

//   return (
//     <div className="min-h-screen max-w-325 mx-auto flex flex-col bg-[#F9F6F0]">
//       <Navbar />

//       <main className="flex-1">
//         <div className="px-4 mb-6 mt-5">

//           <h2 className="text-2xl md:text-4xl text-orange-500 font-bold text-center mt-10 italic">
//             Your Favorites
//           </h2>

//          {favorites.length === 0 ? (
//   <div className="flex flex-col items-center justify-center text-center py-24">

//     <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-5">
//       <FontAwesomeIcon
//         icon={solidHeart}
//         className="text-orange-500 text-3xl"
//       />
//     </div>

//     <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//       No Favorites Yet
//     </h3>

//     <p className="text-gray-500 max-w-md mb-6">
//       You haven't saved any recipes yet. Start exploring and save
//       your favorite meals here.
//     </p>

//     <Link
//       to="/"
//       className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-orange-600 transition duration-200"
//     >
//       Explore Recipes
//       <FontAwesomeIcon icon={faArrowRight} />
//     </Link>

//   </div>
// ) : (
//             <div className="grid grid-cols-1 mt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

//               {favorites.map((recipe) => (

//                 <div
//                   key={recipe.idMeal}
//                   className="bg-white rounded-2xl overflow-hidden shadow-sm border border-orange-400 hover:border-orange-400 transition duration-300"
//                 >

//                   {/* Recipe Image */}
//                   <div className="relative">

//                     <img
//                       src={recipe.strMealThumb}
//                       alt={recipe.strMeal}
//                       className="w-full h-56 object-cover"
//                     />

//                     {/* Remove Favorite */}
//                     <button
//                       onClick={() => handleRemove(recipe.idMeal)}
//                       className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-sm cursor-pointer transition duration-200 hover:scale-110"
//                     >
//                       <FontAwesomeIcon
//                         icon={solidHeart}
//                         className="text-red-500"
//                       />
//                     </button>

//                   </div>

//                   {/* Recipe Information */}
//                   <div className="p-5 flex flex-col">

//                     <h2 className="text-xl font-semibold mb-4">
//                       {recipe.strMeal}
//                     </h2>

//                     <Link
//                       to={`/recipe/${recipe.idMeal}`}
//                       className="w-full inline-flex items-center justify-center gap-2 border border-orange-500 text-orange-500 px-5 py-2.5 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition duration-200 mt-auto"
//                     >
//                       View Recipe
//                       <FontAwesomeIcon icon={faArrowRight} />
//                     </Link>

//                   </div>

//                 </div>

//               ))}

//             </div>
//           )}

//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Favorites;

import { useContext } from "react";
import Navbar from "../components/Navbar";
import FavoritesContext from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart, faArrowRight, faClock, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Favorites = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const handleRemove = (e, id) => {
    e.stopPropagation();
    setFavorites(favorites.filter((fav) => fav.idMeal !== id));
  };

  const getDynamicTime = (id) => {
    const times = ["20 Mins", "25 Mins", "30 Mins", "35 Mins", "40 Mins"];
    const index = parseInt(id || "1", 10) % times.length;
    return times[index] || "25 Mins";
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      <Navbar />

      <main className="flex-1 py-10 px-4">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-2xl md:text-4xl text-orange-600 font-bold text-center tracking-tight">
            Your Favorites
          </h2>

          <p className="text-center mt-2 px-4 italic text-lg text-[#2D4A3E] font-medium">
            All your saved delicious recipes in one place!
          </p>

          {favorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-24">
              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-5">
                <FontAwesomeIcon
                  icon={solidHeart}
                  className="text-orange-600 text-3xl"
                />
              </div>

              <h3 className="text-2xl font-semibold text-black mb-2">
                No Favorites Yet
              </h3>

              <p className="text-black max-w-md mb-6 font-medium">
                You haven't saved any recipes yet. Start exploring and save
                your favorite meals here.
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-orange-600 bg-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-orange-700 transition duration-200 text-sm shadow-sm"
              >
                Explore Recipes
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
              {favorites.map((recipe, index) => {
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
                        <span className="absolute top-3 left-3 bg-[#2D4A3E]/85  backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full shadow-sm z-10 border border-white/10">
                          {recipe.strCategory}
                        </span>
                      )}

                      {/* Remove Button */}
                      <motion.button
                        whileTap={{ scale: 0.75 }}
                        onClick={(e) => handleRemove(e, recipe.idMeal)}
                        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white backdrop-blur-md flex items-center justify-center shadow-md cursor-pointer hover:bg-white transition duration-200 z-10 border border-gray-200"
                        title="Remove from favorites"
                      >
                        <FontAwesomeIcon
                          icon={solidHeart}
                          className="text-base text-red-600"
                        />
                      </motion.button>

                      {/* Glassmorphism Quick Info Overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-md p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex justify-between items-center border-t border-gray-200 text-xs font-semibold text-black z-10">
                        <span className="flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faClock} className="text-orange-600" />
                          ~{cookTime}
                        </span>
                        <span className="flex items-center gap-1.5 truncate max-w-30">
                          <FontAwesomeIcon icon={faGlobe} className="text-orange-600" />
                          {recipeMeta}
                        </span>
                      </div>
                    </div>

                    {/* Info Body */}
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <h3
                        className="text-lg font-semibold italic text-black mb-4 line-clamp-1 group-hover:text-orange-600 transition-colors duration-200"
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
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;