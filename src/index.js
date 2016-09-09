import React from 'react';
import ReactDOM from 'react-dom'; 
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDmb6Al9P1LrVQGctwbOzGmy7SS4emh2YI';

// Creer un composant qui rend du HTML
const App = function() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Rendre ce composant dans le DOM 
ReactDOM.render(<App />, document.querySelector('.container'));