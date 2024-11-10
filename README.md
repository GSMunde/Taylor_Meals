
### Taylor Meals


## Project Overview 

A web application designed for Taylor, a busy professional, to simplify finding recipes based on available ingredients, time constraints, or preferences. Key features include:
 
* Ingredient-based recipe search using TheMealDB API.
* Interactive map showing the recipe's origin.

# Technology Stack

* Frameworks: React 
* Styling: Tailwind CSS.
* Data Fetching: TheMealDB API (no authentication required)
* State Management: React's state management.
* Mapping Library: Leaflet with react-leaflet or svelte-leaflet integration

# Features

1. Search for recipes by ingredient.
2. Display recipe origins on an interactive map.
3. Clean, responsive UI for desktop and mobile.
4. Error handling for network issues or no results.

# User Persona

* Name: Taylor
* Occupation: Busy Professional
* Need: To quickly find recipes based on available ingredients and preferences.

## Getting Started

# Prerequisites

* Node.js
* Internet access

# Installation

1. Clone the repository:

git clone:  [ https://github.com/GSMunde/Taylor_Meals.git 
cd recipe-ideas-app ]

2. Install dependencies: [ npm install ]

3. Run the application: [ npm start ]

Access it at http://localhost:3000.

# Production Build
 npm run build

# Usage

1. Input ingredients to search for recipes.
2. Click a recipe to see its origin on the map.

# API
* TheMealDB : [ https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}
]

## Code Structure

{ src/
|-- components/
|   |-- SearchBar.jsx / .svelte
|   |-- RecipeList.jsx / .svelte
|   |-- MapComponent.jsx / .svelte
|-- pages/
|   |-- HomePage.jsx / .svelte
|-- App.js / App.svelte
|-- index.js / main.js

}

## Error Handling

* Display messages for errors and no results.

## Testing 

* Unit and integration tests for component functionality and API interactions.

## Future Enhancements 

* Add filters for cooking time and dietary preferences.
* Feature for saving favorite recipes.
* Advanced search options.

## License

* MIT License. 

# Acknowledgements 

* TheMealDB
* Leaflet, react-leaflet, and svelte-leaflet.
