import './App.scss';
import pokemonsData from './pokemonsData'
import PokemonList from './components/PokemonList'

function App() {
  return (
    <div className="App">
      <PokemonList
        data={pokemonsData}
      />
    </div>
  );
}

export default App;
