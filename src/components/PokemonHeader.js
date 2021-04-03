import React from 'react';

class PokemonHeader extends React.Component {
  render() {
    return (
      <header>
        <div className={this.props.isOpen ? 'red-section header-open' : 'red-section'}>
          {/* {
            this.props.isOpen && <img alt="logo" src='/images/pokemon-logo.png'/>
          } */}
        </div>
        <div className="black-section">
          <div className="black-circle">
            <div className="white-circle">
              <div className="white-poke-button" onClick={this.props.togglePokeball}></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default PokemonHeader;
