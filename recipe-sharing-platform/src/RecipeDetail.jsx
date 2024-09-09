import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Adjust the path if your data.json is located elsewhere

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID
    const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-auto mb-6 rounded"
      />
      <p className="text-gray-700 text-base mb-4">{recipe.summary}</p>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700 text-base">{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructions:</h2>
      <ol className="list-decimal list-inside">
        {recipe.instructions && recipe.instructions.map((step, index) => (
          <li key={index} className="text-gray-700 text-base mb-2">{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;
