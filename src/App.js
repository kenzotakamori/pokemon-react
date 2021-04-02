import React from 'react';
import './App.scss';
import pokemonsData from './pokemonsData'
import PokemonList from './components/PokemonList'
import SearchTool from './components/SearchTool'
import PokemonHeader from './components/PokemonHeader'
import PokemonFooter from './components/PokemonFooter'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: pokemonsData.map((p) => {
        p.display = true;
        return p;
      })
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  };

  handleInputChange(event) {
    const value = event.target.value;
    const regex = this.translateToRegex(value);
    this.setState((prevState) => {
      return {
        data: prevState.data.map((p) => {
          p.display = regex.test(p.name);
          return p;
        })
      };
    });
  };

  translateToRegex(text) {
    return new RegExp(text);
  };

  render() {
    return (
      <div className="App">
        <PokemonHeader />
        <SearchTool
          handleInputChange={this.handleInputChange}
        />
        <PokemonList
          data={this.state.data}
        />
        <PokemonFooter />
      </div>
    );
  };
}

export default App;
