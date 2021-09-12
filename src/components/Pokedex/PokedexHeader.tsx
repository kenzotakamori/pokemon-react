const PokedexHeader = (props: any) => {
  return (
    <header>
      <div className={props.isOpen ? 'red-section header-open' : 'red-section'}>
        {/* {
          this.props.isOpen && <img alt="logo" src='/images/pokemon-logo.png'/>
        } */}
      </div>
      <div className="black-section">
        <div className="black-circle">
          <div className="white-circle">
            <div className="white-poke-button" onClick={props.togglePokeball}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PokedexHeader;
