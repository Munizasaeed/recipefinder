import  { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard'
const Api = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");

                if (!response.ok) {
                    throw new Error("There is some error");
                }

                const data = await response.json();
                setRecipes(data.meals || []);
                console.log(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-orange-500 rounded-full animate-spin"></div>
            <p className="mt-3 text-gray-500">Loading recipes...</p>
        </div>
    );
}

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <RecipeCard fetchRecipes={recipes} />
        </div>
    );
}
export default Api
