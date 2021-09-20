import '../../css/Pokemon/PokeIcon.scss';
import { PokemonInterface } from '../interfaces';

interface PokeIconProps {
  info: PokemonInterface
  handlePokemonClick: (name: string) => void 
}

const PokeIcon = (props: PokeIconProps) =>  {
  const { info, handlePokemonClick } = props;

  return (
    <div className={info.display ? 'PokeIcon' : 'PokeIcon hide'}>
      <div className="image-container">
        <img 
          src={info.imgUrl}
          alt={info.name}
          onClick={() => handlePokemonClick(info.name)}
        />
      </div>
      <span><code>{info.name}</code></span>
    </div>
  );
}
  
export default PokeIcon;