import PokeIcon from '../Pokemon/PokeIcon'

const PokedexList = (props: any) => {
  const pokemonsComponent = props.data.map((pokemon: any) => 
    <PokeIcon
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

export default PokedexList;