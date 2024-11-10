# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


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

git clone:  [ https://github.com/your-repo/recipe-ideas-app.git
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