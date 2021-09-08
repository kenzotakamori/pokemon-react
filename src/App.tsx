import { useState } from 'react';
import './App.scss';
import pokemonsData from './pokemonsData.js'
import PokemonList from './components/PokemonList'
import PokemonHeader from './components/PokemonHeader'
import PokemonFooter from './components/PokemonFooter'

const App = () => {
  const data = pokemonsData.map((p: any) => {
    p.display = true;
    return p;
  });
  const dataLength = data.filter((p: any) => p.display).length;
  const [isOpen, setIsOpen] = useState(false);
  const [isPokemonClicked, setIsPokemonClicked] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  const togglePokeball = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handlePokemonClick = (name: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then((result) => {
        setIsPokemonClicked(true);
        setSelectedPokemon(result);
        console.log(isPokemonClicked);
        console.log(selectedPokemon);
      });
  };

  return (
    <div className="App">
      <PokemonHeader 
        isOpen={isOpen}
        togglePokeball={togglePokeball}
      />
      <div className="pokemon-body">
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
      </div>
      <PokemonFooter isOpen={isOpen}/>
    </div>
  );
}

export default App;
