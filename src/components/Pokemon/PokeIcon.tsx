import '../../css/Pokemon/PokeIcon.scss';

const PokeIcon = (props: any) =>  {
  const info = props?.info;

  return (
    <div className={info.display ? 'PokeIcon' : 'PokeIcon hide'}>
      <div className="image-container">
        <img 
          src={info.imgUrl}
          alt={info.name}
          onClick={() => props?.handlePokemonClick(info.name)}
        />
      </div>
      <span><code>{info.name}</code></span>
    </div>
  );
}
  
export default PokeIcon;