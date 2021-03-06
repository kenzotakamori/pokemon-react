import React from 'react';
import './App.scss';
import pokemonsData from './pokemonsData'
import PokemonList from './components/PokemonList'
import SearchTool from './components/SearchTool'
import PokemonHeader from './components/PokemonHeader'
import PokemonFooter from './components/PokemonFooter'
import PokemonDetail from './components/PokemonDetail'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: pokemonsData.map((p) => {
        p.display = true;
        return p;
      }),
      isOpen: false,
      isPokemonClicked: false,
      selectedPokemon: {}
    };
  };

  togglePokeball = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleInputChange = (event) => {
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

  handlePokemonClick = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isPokemonClicked: true,
          selectedPokemon: result
        });
      });
  };

  translateToRegex = (text) => {
    return new RegExp(text);
  };

  render() {
    const dataLength = this.state.data.filter((p) => p.display).length;
    return (
      <div className="App">
        <PokemonHeader 
          isOpen={this.state.isOpen}
          togglePokeball={this.togglePokeball}
        />
        <div className="pokemon-body">
          <SearchTool
            handleInputChange={this.handleInputChange}
          />
          {
            dataLength ?
            <PokemonList
              data={this.state.data}
              handlePokemonClick={this.handlePokemonClick}
            /> :
            <div className="no-pokemon-found">
              <i class="fal fa-telescope fa-5x"></i>
              <div className="no-pokemon-found__text">
                <code>Ops, nenhum Pok??mon encontrado!</code>
              </div>
            </div>
          }
          {
            this.state.isPokemonClicked ?
            <PokemonDetail
              selectedPokemon={this.state.selectedPokemon}
            /> :
            <div className="no-pokemon-selected">
              <i class="far fa-hand-pointer fa-5x"></i>
              <div className="no-pokemon-selected__text">
                <code>Clique em algum Pok??mon!</code>
              </div>
            </div>
          }
        </div>
        <PokemonFooter isOpen={this.state.isOpen}/>
      </div>
    );
  };
}

export default App;
