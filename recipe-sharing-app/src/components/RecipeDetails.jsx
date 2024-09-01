import React from 'react';
import { useRecipeStore } from '../recipeStore';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const isFavorite = useRecipeStore((state) => state.favorites.includes(recipeId));

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {isFavorite ? (
        <button onClick={() => removeFavorite(recipeId)}>Remove from Favorites</button>
      ) : (
        <button onClick={() => addFavorite(recipeId)}>Add to Favorites</button>
      )}
    </div>
  );
};

export default RecipeDetails;
