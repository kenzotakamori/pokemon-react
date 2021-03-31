function Pokemon(props) {
  const info = props.info;

  return (
    <div className="pokemon">
      <img src={info.imgUrl} alt={info.name}/>
      <span>{info.name}</span>
    </div>
  );
}
  
export default Pokemon;