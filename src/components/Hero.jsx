
const Hero = () => {
  return (
  <section 
  className="bg-[#F9F6F0] bg-cover bg-center py-16 px-6 text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-4">Find Your Perfet Recipe</h1>
    <p className="text-lg sm:text-xl md:text-xl italic">
      Discover Delicious Recipes ,explore new flavors and find your next fovourite meal
    </p>
   <div className="mt-6 flex justify-center">
  <div className="flex items-center w-full max-w-3xl border border-gray-300 rounded-2xl px-2 focus-within:ring-2 focus-within:ring-orange-500">
    <input 
      type="text" 
      placeholder="Search for recipes..." 
      className="flex-1 py-2 px-2 focus:outline-none" 
    />
    <button className="bg-orange-500 text-white py-1.5 px-4 rounded-2xl hover:bg-orange-600 ml-2 my-1">
      Search
    </button>
  </div>
</div>
</section>
  )
}

export default Hero
