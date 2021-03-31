import Pokemon from './Pokemon'

function PokemonList(props) {
  const pokemonsComponent = props.data.map((pokemon) => 
    <Pokemon
      key={pokemon.name}
      info={pokemon}
    />
  )

  const style = {
    'display': 'grid',
    'grid-template-columns': 'repeat(6,1fr)'
  }

  return (
    <div className="pokemonList" style={style}>
      {pokemonsComponent}
    </div>
  );
}

export default PokemonList;