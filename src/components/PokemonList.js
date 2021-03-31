import Pokemon from './Pokemon'

function PokemonList(props) {
  const pokemonsComponent = props.data.map((pokemon) => 
    <Pokemon
      key={pokemon.name}
      info={pokemon}
    />
  )

  return (
    <div className="pokemonList">
      {pokemonsComponent}
    </div>
  );
}

export default PokemonList;