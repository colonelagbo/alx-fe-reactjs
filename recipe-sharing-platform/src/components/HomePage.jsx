import React, { useState, useEffect } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';


function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 text-center">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
              <a href={`/recipes/${recipe.id}`} className="text-blue-500 hover:underline mt-4 block">
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <Link to={`/recipe/${recipe.id}`} className="text-blue-500">View Recipe</Link>
    </div>
}

export default HomePage;
