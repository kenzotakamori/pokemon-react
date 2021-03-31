function Pokemon(props) {
  const info = props.info;

  const pokemonStyle = {
    'display': 'inline-grid',
    'margin': 'auto'
  }

  const imgStyle = {
    'margin': 'auto'
  }

  const textStyle = {
    'text-align': 'center',
    'text-transform': 'uppercase'
  }

  return (
    <div className="pokemon" style={pokemonStyle}>
      <img 
        style={imgStyle}
        src={info.imgUrl}
        alt={info.name}/>
      <span style={textStyle}>
        {info.name}
      </span>
    </div>
  );
}
  
export default Pokemon;