import '../../css/PokedexList.scss';
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
    <div className="PokedexList">
      {pokemonsComponent}
    </div>
  );
}

export default PokedexList;