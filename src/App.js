import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';
import RecipeMap from './Components/RecipeMap';
import Navbar from './Components/Navbar';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [ingredient, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

 
  //console.log(countryCoordinates);
  
  
  // Fetch default recipes when the component mounts
  useEffect(() => {
    const fetchDefaultRecipes = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        setRecipes(data.meals);
      } catch (error) {
        console.error('Error fetching default recipes:', error);
      }
    };

    fetchDefaultRecipes();
  }, []);

  
  // Fetch recipes based on search term
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!ingredient) return;

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        alert('No recipes found for the entered ingredient.');
        setRecipes([]);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
      alert('An error occurred while searching for recipes.');
    }
  };

  return (
    <div className="container mx-auto p-4 ">
      <Navbar/>
      <h1 className="text-3xl font-bold mb-4">Welcome, Taylor! What's cooking today?</h1>
      
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Enter an ingredient (e.g., chicken)"
          value={ingredient}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-md p-2 w-full mb-2"
        />
        <button type="submit" className="mt-2 font-bold p-2 rounded-md border border-pink-500 text-[#d64796] hover:bg-pink-500 hover:text-white">
          Search Recipes
        </button>
      </form>

      <RecipeList recipes={recipes} setSelectedRecipe={setSelectedRecipe} setSelectedCountry={setSelectedCountry}/>

      {selectedRecipe && (
        <div className="mt-6">
          <RecipeDetails recipe={selectedRecipe} />
          <RecipeMap selectedCountry={selectedCountry} />
        </div>
      )}
    </div>
  );
}

export default App;
