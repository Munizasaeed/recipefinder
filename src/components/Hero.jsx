
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import FavoritesContext from "../context/FavoritesContext";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

// const Hero = ({
//   searchTerm,
//   setSearchTerm,
//   onSearch,
//   searchResults,
//   noResultsTerm,
//   setNoResultsTerm,
//   loading,
//   error,
//   lastSearchedTerm,
// }) => {
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
//     <section className="relative overflow-hidden min-h-112.5 py-16  px-6 text-center">

//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src="/food-video.mp4" type="video/mp4" />
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Hero Content */}
//       <div className="relative z-10 w-full flex flex-col items-center">
//        <h1 className="text-4xl text-orange-600 italic font-medium mb-12">   Thousands of recipes. Endless possibilities.</h1>
//         {/* Heading */}
//         <h1 className="text-4xl hero-animation sm:text-5xl md:text-6xl font-medium mb-4 text-white">
//           Find Your Perfect Recipe
//         </h1>

//         {/* Description */}
//         <p className="text-lg sm:text-xl hero-delay md:text-xl italic text-white">
//           Discover Delicious Recipes, explore new flavors and find your next
//           favourite meal
//         </p>

//         {/* Search Bar */}
//         <div className="mt-6 hero-search-animation flex justify-center px-2 w-full">

//           <div className="flex items-center w-full max-w-3xl border border-gray-300 rounded-2xl px-2 bg-white/95 focus-within:ring-2 focus-within:ring-orange-500 transition duration-200">

//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setNoResultsTerm("");
//               }}
//               placeholder="Search for recipes..."
//               className="flex-1 min-w-0 py-2 px-2 focus:outline-none bg-transparent"
//             />

//             <button
//               onClick={onSearch}
//               className="bg-orange-500 text-white py-1.5 px-3 sm:px-4 text-sm sm:text-base rounded-2xl hover:bg-orange-600 transition duration-200 ml-2 my-1 shrink-0"
//             >
//               Search
//             </button>

//           </div>

//         </div>

//         {/* Results */}
//         <div className="mt-8 w-full">

//           {/* Loading */}
//           {loading && (
//             <div className="flex flex-col items-center justify-center py-10">
//               <div className="w-20 h-20 border-8 border-gray-200 border-t-orange-500 rounded-full animate-spin"></div>

//               <p className="mt-3 text-white">
//                 Loading recipes...
//               </p>
//             </div>
//           )}

//           {/* Error */}
//           {error && (
//             <p className="text-red-500">
//               {error}
//             </p>
//           )}

//           {/* No Results */}
//           {!loading &&
//             !error &&
//             searchResults.length === 0 &&
//             noResultsTerm.trim() !== "" && (
//               <p className="font-bold text-red-600 text-2xl">
//                 No results found for "{noResultsTerm}"
//               </p>
//             )}

//           {/* Search Results */}
//           {!loading &&
//             !error &&
//             searchResults.length > 0 && (
//               <>
//                 <h2 className="text-2xl font-semibold mb-4 text-left px-4 text-white">
//                   Results for {lastSearchedTerm}
//                 </h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 text-left">

//                   {searchResults.map((recipe) => (
//                     <div
//                       key={recipe.idMeal}
//                       className="bg-white rounded-lg shadow-md p-4 flex flex-col"
//                     >

//                       {/* Recipe Image */}
//                       <img
//                         src={recipe.strMealThumb}
//                         alt={recipe.strMeal}
//                         loading="lazy"
//                         className="w-full h-40 object-cover rounded-md mb-2"
//                       />

//                       {/* Recipe Name + Favorite */}
//                       <div className="flex items-start justify-between gap-2 mb-3">

//                         <h2 className="text-lg font-semibold">
//                           {recipe.strMeal}
//                         </h2>

//                         <span
//                           className={`cursor-pointer leading-none shrink-0 self-center ${
//                             favorites.some(
//                               (fav) => fav.idMeal === recipe.idMeal
//                             )
//                               ? "text-red-500"
//                               : "text-gray-300"
//                           }`}
//                           onClick={() =>
//                             handleFavoriteClick(recipe)
//                           }
//                         >

//                           {favorites.some(
//                             (fav) => fav.idMeal === recipe.idMeal
//                           ) ? (
//                             <FontAwesomeIcon
//                               icon={solidHeart}
//                               className="text-red-500"
//                               style={{ fontSize: "20px" }}
//                             />
//                           ) : (
//                             <FontAwesomeIcon
//                               icon={regularHeart}
//                               className="text-gray-400"
//                               style={{ fontSize: "20px" }}
//                             />
//                           )}

//                         </span>

//                       </div>

//                       {/* View Recipe */}
//                       <Link
//                         to={`/recipe/${recipe.idMeal}`}
//                         className="w-full bg-orange-500 px-6 text-white py-2 text-center rounded-md hover:bg-orange-600 mt-auto"
//                       >
//                         View Recipe
//                       </Link>

//                     </div>
//                   ))}

//                 </div>
//               </>
//             )}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default Hero;
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as solidHeart,
  faArrowRight,
  faClock,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Hero = ({
  searchTerm,
  setSearchTerm,
  onSearch,
  searchResults,
  noResultsTerm,
  setNoResultsTerm,
  loading,
  error,
  lastSearchedTerm,
}) => {
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
    <section className="relative overflow-hidden min-h-112.5 py-16 px-6 text-center">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/food-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* Tagline */}
        <h1 className="text-4xl text-orange-600 italic font-medium mb-12">
          Thousands of recipes. Endless possibilities.
        </h1>

        {/* Heading */}
        <h1 className="text-4xl hero-animation sm:text-5xl md:text-6xl font-medium mb-4 text-white">
          Find Your Perfect Recipe
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl hero-delay md:text-xl italic text-white">
          Discover Delicious Recipes, explore new flavors and find your next
          favourite meal
        </p>

        {/* Search Bar */}
        <div className="mt-6 hero-search-animation flex justify-center px-2 w-full">

          <div className="flex items-center w-full max-w-3xl border border-gray-300 rounded-2xl px-2 bg-white/95 focus-within:ring-2 focus-within:ring-orange-500 transition duration-200">

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setNoResultsTerm("");
              }}
              placeholder="Search for recipes..."
              className="flex-1 min-w-0 py-2 px-2 focus:outline-none bg-transparent"
            />

            <button
              onClick={onSearch}
              className="bg-orange-500 text-white py-1.5 px-3 sm:px-4 text-sm sm:text-base rounded-2xl hover:bg-orange-600 transition duration-200 ml-2 my-1 shrink-0"
            >
              Search
            </button>

          </div>
        </div>

        {/* Results */}
        <div className="mt-8 w-full">

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-10">

              <div className="w-20 h-20 border-8 border-gray-200 border-t-orange-500 rounded-full animate-spin"></div>

              <p className="mt-3 text-white">
                Loading recipes...
              </p>

            </div>
          )}

          {/* Error */}
          {error && (
            <p className="text-red-500">
              {error}
            </p>
          )}

          {/* No Results */}
          {!loading &&
            !error &&
            searchResults.length === 0 &&
            noResultsTerm.trim() !== "" && (
              <p className="font-bold text-red-600 text-2xl">
                No results found for "{noResultsTerm}"
              </p>
            )}

          {/* Search Results */}
          {!loading &&
            !error &&
            searchResults.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-left px-4 text-white">
                  Results for {lastSearchedTerm}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 text-left">

                  {searchResults.map((recipe) => {

                    const isFav = favorites.some(
                      (fav) => fav.idMeal === recipe.idMeal
                    );

                    const cookTime = recipe.strCookTime || "25 Mins";

                    const recipeMeta =
                      recipe.strCategory ||
                      recipe.strArea ||
                      "Global Taste";

                    return (
                      <div
                        key={recipe.idMeal}
                        className="bg-white rounded-2xl border border-orange-400 hover:border-orange-600 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col overflow-hidden group"
                      >

                        {/* Image Container */}
                        <div className="relative overflow-hidden h-52 bg-gray-100">

                          <img
                            src={recipe.strMealThumb}
                            alt={recipe.strMeal}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />

                          {/* Category */}
                          {recipe.strCategory && (
                            <span className="absolute top-3 left-3 bg-[#2D4A3E]/85 text-white text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full shadow-sm z-10">
                              {recipe.strCategory}
                            </span>
                          )}

                          {/* Favorite Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleFavoriteClick(recipe);
                            }}
                            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform duration-200 z-10 border border-gray-200"
                          >
                            <FontAwesomeIcon
                              icon={
                                isFav
                                  ? solidHeart
                                  : regularHeart
                              }
                              className={`text-base ${
                                isFav
                                  ? "text-red-600"
                                  : "text-black"
                              }`}
                            />
                          </button>

                          {/* Quick Info */}
                          <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-md p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex justify-between items-center border-t border-gray-200 text-xs font-semibold text-black z-10">

                            <span className="flex items-center gap-1.5">
                              <FontAwesomeIcon
                                icon={faClock}
                                className="text-orange-600"
                              />
                              ~{cookTime}
                            </span>

                            <span className="flex items-center gap-1.5 truncate max-w-30">
                              <FontAwesomeIcon
                                icon={faGlobe}
                                className="text-orange-600"
                              />
                              {recipeMeta}
                            </span>

                          </div>

                        </div>

                        {/* Card Information */}
                        <div className="p-5 flex flex-col flex-1">

                          <h2
                            className="text-lg font-semibold text-black italic mb-4 line-clamp-1 group-hover:text-orange-600 transition-colors duration-200"
                            title={recipe.strMeal}
                          >
                            {recipe.strMeal}
                          </h2>

                          {/* View Recipe */}
                          <Link
                            to={`/recipe/${recipe.idMeal}`}
                            className="w-full inline-flex items-center justify-center gap-2 border-2 border-orange-600 text-orange-600 px-5 py-2.5 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition-all duration-200 text-sm shadow-sm mt-auto"
                          >
                            View Recipe

                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-xs group-hover:translate-x-1 transition-transform duration-200"
                            />
                          </Link>

                        </div>

                      </div>
                    );
                  })}

                </div>
              </>
            )}

        </div>
      </div>
    </section>
  );
};

export default Hero;