import React from 'react';

function RecipeList({ recipes, setSelectedRecipe, setSelectedCountry  }) {
  
  if (recipes.length === 0) {
    return <p>No recipes to display.</p>;
  }

  const handleRecipeClick = (recipe) => {
    // Here, you can add logic to map the recipe to its country, for now, assuming it has a `strArea` property
    const country = recipe.strArea || "Unknown";  // Default to "Unknown" if no country is provided
    setSelectedRecipe(recipe);
    setSelectedCountry(country);
    
  };

  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="border rounded-lg shadow-md p-2 cursor-pointer hover:bg-gray-300 group relative overflow-hidden"
          onClick={() => handleRecipeClick(recipe)}
        >
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-40 object-cover rounded-md mb-2 transform group-hover:scale-110 transition-transform duration-150 ease-in-out" />
          <h2 className="text-lg font-semibold">{recipe.strMeal}</h2>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
