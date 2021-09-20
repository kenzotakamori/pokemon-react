import '../../css/Pokedex/PokedexList.scss';
import PokeIcon from '../Pokemon/PokeIcon'
import { PokemonInterface } from '../interfaces';

interface PokedexListProps {
  data: PokemonInterface[]
  handlePokemonClick: (name: string) => void 
}

const PokedexList = (props: PokedexListProps) => {
  const pokemonsComponent = props.data.map((pokemon: PokemonInterface) => 
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