import './App.css';
import pokemons from './pokemons.json'

function App() {
  return (
    <div className="App">
      {
        pokemons.map((pokemon) => 
          <div key="pokemon.name" className="pokemon">
            <img src={pokemon.imgUrl} alt={pokemon.name}/>
            <span>{pokemon.name}</span>
          </div>
        )
      }
    </div>
  );
}

export default App;

// TO DO 1: Colocar pokemons em componente a parte
// TO DO 2: Criar componente para somente um pokemon
// TO DO 3: Criar header e footer e colocar em index.js