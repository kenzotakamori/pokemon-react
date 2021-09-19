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

  const handlePokemonClick = async (name: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      console.log(response);
      if(!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      setIsPokemonClicked(true);
      setSelectedPokemon(data);
      console.log(isPokemonClicked);
      console.log(selectedPokemon);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <PokedexHeader 
        isOpen={isOpen}
        togglePokeball={togglePokeball}
      />
      <div className="pokedex-body">
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
