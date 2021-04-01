import React from 'react';
import './App.scss';
import pokemonsData from './pokemonsData'
import PokemonList from './components/PokemonList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: pokemonsData
    };
  };

  render() {
    return (
      <div className="App">
        <PokemonList
          data={this.state.data}
        />
      </div>
    );
  };
}

export default App;
