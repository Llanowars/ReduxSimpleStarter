import React from 'react';
import ReactDOM from 'react-dom' 

// Creer un composant qui rend du HTML
const App = function() {
  return <h1>Hello</h1>;
}

// Rendre ce composant dans le DOM 
ReactDOM.render(<App />, document.querySelector('.container'));