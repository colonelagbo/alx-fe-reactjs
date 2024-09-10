return (
  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">{recipe.name}</h1>
    <img src={recipe.image} alt={recipe.name} className="w-full h-auto mb-4 rounded-lg shadow-lg" />
    <div className="ingredients mb-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="mb-1">{ingredient}</li>
        ))}
      </ul>
    </div>
    <div className="instructions p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  </div>
);
