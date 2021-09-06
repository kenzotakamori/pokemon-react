import { useState } from 'react';
import './App.scss';
import pokemonsData from './pokemonsData.js'
import PokemonList from './components/PokemonList'
import SearchTool from './components/SearchTool'
import PokemonHeader from './components/PokemonHeader'
import PokemonFooter from './components/PokemonFooter'
import PokemonDetail from './components/PokemonDetail'

const App = () => {
  const initialData = pokemonsData.map((p: any) => {
    p.display = true;
    return p;
  })
  const [data, setData] = useState(initialData);
  const [isOpen, setIsOpen] = useState(false);
  const [isPokemonClicked, setIsPokemonClicked] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  const togglePokeball = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    const regex = translateToRegex(value);
    const filteredResults = pokemonsData.map((p: any) => {
      p.display = regex.test(p.name);
      return p;
    });
    setData(filteredResults);
  };

  const handlePokemonClick = (name: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then((result) => {
        setIsPokemonClicked(true);
        setSelectedPokemon(result);
      });
  };

  const translateToRegex = (text: string) => {
    return new RegExp(text);
  };

  const dataLength = data.filter((p: any) => p.display).length;
  return (
    <div className="App">
      <PokemonHeader 
        isOpen={isOpen}
        togglePokeball={togglePokeball}
      />
      <div className="pokemon-body">
        <SearchTool
          handleInputChange={handleInputChange}
        />
        {
          dataLength ?
          <PokemonList
            data={data}
            handlePokemonClick={handlePokemonClick}
          /> :
          <div className="no-pokemon-found">
            <i className="fal fa-telescope fa-5x"></i>
            <div className="no-pokemon-found__text">
              <code>Ops, nenhum Pokémon encontrado!</code>
            </div>
          </div>
        }
        {
          isPokemonClicked ?
          <PokemonDetail
            selectedPokemon={selectedPokemon}
          /> :
          <div className="no-pokemon-selected">
            <i className="far fa-hand-pointer fa-5x"></i>
            <div className="no-pokemon-selected__text">
              <code>Clique em algum Pokémon!</code>
            </div>
          </div>
        }
      </div>
      <PokemonFooter isOpen={isOpen}/>
    </div>
  );
}

export default App;
