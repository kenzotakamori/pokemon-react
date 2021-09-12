import { useState } from 'react';
import './App.scss';
import pokemonsData from './pokemonsData.js'
import PokedexList from './components/Pokedex/PokedexList'
import PokedexHeader from './components/Pokedex/PokedexHeader'
import PokedexFooter from './components/Pokedex/PokedexFooter'

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
      <PokedexHeader 
        isOpen={isOpen}
        togglePokeball={togglePokeball}
      />
      <div className="pokemon-body">
        {
          dataLength ?
          <PokedexList
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
      <PokedexFooter isOpen={isOpen}/>
    </div>
  );
}

export default App;
