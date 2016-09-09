import React from 'react';

// Functional component
// const SearchBar = () => {
//   return <input />;
// }

// Building a class
class SearchBar extends React.Component {
  render() {
    return <input onChange={this.onInputChange} />;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;