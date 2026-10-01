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
        return <div>Loading recipes...</div>;
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
