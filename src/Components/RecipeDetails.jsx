import React from 'react';

function RecipeDetails({ recipe }) {


  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      
      <h2 className="text-2xl font-bold mb-2">{recipe.strMeal}</h2>
      
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-64 object-cover rounded-md mb-4" />

      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Origin:</strong> {recipe.strArea}</p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Ingredients:</h3>
        <ul>
          {Object.keys(recipe)
            .filter((key) => key.includes('strIngredient') && recipe[key])
            .map((key, index) => (
              <li key={index}>{recipe[key]}</li>
            ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Instructions:</h3>
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetails;
