import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipesData from '../data/recipes.json'; // Assume your recipe data is in this file.

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchedRecipe = recipesData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(fetchedRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;
  return (
    <div className="max-w-4xl mx-auto p-5 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center">{recipe.title}</h1>
      <img
  src={recipe.image}
  alt={recipe.title}
  className="w-full h-auto rounded-lg mb-8 shadow-lg md:w-1/2 md:float-left md:mr-8"
/>
      <div className="ingredients mb-8">
        <h2 className="text-3xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc pl-6 text-lg leading-relaxed">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="mb-2">{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="instructions">
        <h2 className="text-3xl font-semibold mb-4">Cooking Instructions</h2>
        <ol className="list-decimal pl-6 text-lg leading-relaxed">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-4">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;