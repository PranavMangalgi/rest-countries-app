# Country Information App

## Overview
This React application provides information about countries, allowing users to explore details such as population, region, languages, and more.

## Key Concepts
1. **React Components:**
   - Functional components for different aspects of showing countries.
   - Use of `useContext` hook to access shared state.

2. **React Hooks:**
   - Utilization of `useState` for managing local component state.
   - Use of `useEffect` for handling side effects and lifecycle events.

3. **Context API:**
   - Implementation of the `AppContext` for sharing state across components.

4. **Conditional Rendering:**
   - Conditional display of components based on certain conditions.

5. **Event Handling:**
   - Definition of various event handlers for user interactions.

6. **CSS Styling:**
   - Styling done using CSS with features like flexbox, grid, and media queries.
   - Use of CSS modules for scoped styling.

7. **React Router:**
   - Possible usage of React Router for navigation.

8. **External Libraries:**
   - Integration of lodash for utility functions.
   - Implementation of debouncing using lodash's debounce function for a smoother user experience.

## Components
1. **App**
   - This is the main component that serves as the entry point for your React application. It sets up routes using react-router-dom and provides a context provider for managing dark mode.

2. **CountryList**
   - This component handles the display of a list of countries. It includes a search bar and a filter for regions, allowing users to find and filter countries dynamically.

3. **Country**
   - Represents an individual country in the list. It displays basic information about the country, such as its flag, name, population, region, and capital.

4. **CountryPage**
   - Responsible for rendering detailed information about a specific country. It fetches data based on the country name from the URL parameters, including information like population, region, subregion, capital, top-level domain, currencies, languages, and neighboring countries.

## Hooks
- **useState**: Used for managing local component state.
- **useEffect**: Used for handling side effects and lifecycle events.
- **useContext**: Used for accessing shared state.

## Styling
- CSS is used for styling with features like flexbox, and media queries.
- CSS modules are employed for scoped styling.

## External Libraries
- **Lodash**: Used for utility functions.
- **Debounce**: Implemented debouncing using lodash's debounce function for a smoother user experience.

## Usage
1. Install dependencies: `npm install`
2. Run the application: `npm run dev`

This application is built with Vite. 

## Getting Started
Follow these steps to set up and run the Country Information App on your local machine.

### Prerequisites
- Node.js and npm installed on your machine.