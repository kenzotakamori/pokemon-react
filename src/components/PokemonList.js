import Pokemon from './Pokemon'

function PokemonList(props) {
  const pokemonsComponent = props.data.map((pokemon) => 
    <Pokemon
      key={pokemon.name}
      info={pokemon}
    />
  )

  return (
    <div className="PokemonList">
      {pokemonsComponent}
    </div>
  );
}

export default PokemonList;