import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDmb6Al9P1LrVQGctwbOzGmy7SS4emh2YI';

// Creer un composant qui rend du HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfoards'}, (videos) => {
      this.setState({ videos: videos });
      // this.setState({ videos })
      // Lorsque clé et valeurs sont les mêmes mots on peut simplifier la syntaxe comme çi dessus
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Rendre ce composant dans le DOM 
ReactDOM.render(<App />, document.querySelector('.container'));