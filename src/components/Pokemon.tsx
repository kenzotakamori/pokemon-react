const Pokemon = (props: any) =>  {
  const info = props?.info;

  return (
    <div className={info.display ? 'Pokemon' : 'Pokemon hide'}>
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
  
export default Pokemon;