import Pokemon from './Pokemon'

const PokemonList = (props: any) => {
  const pokemonsComponent = props.data.map((pokemon: any) => 
    <Pokemon
      key={pokemon.name}
      info={pokemon}
      handlePokemonClick={props.handlePokemonClick}
    />
  )

  return (
    <div className="PokemonList">
      {pokemonsComponent}
    </div>
  );
}

export default PokemonList;