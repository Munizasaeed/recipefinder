
import  { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Recipedetail from '../pages/RecipeDetail'
const Details = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
const {id}= useParams();
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

                if (!response.ok) {
                    throw new Error("There is some error");
                }

                const data = await response.json();
                setRecipes(data.meals );
                console.log(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [id]);

    if (loading) {
        return <div>Loading recipes...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <Recipedetail details={recipes} />
        </div>
    );
};

export default Details;
