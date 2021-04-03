import React from 'react';

class PokemonHeader extends React.Component {
  render() {
    const height = this.props.isOpen ? '10vh' : '50vh'
    const styles = {
      'height': height
    }

    return (
      <header>
        <div className="red-section" style={styles}>
          {
            this.props.isOpen && <img alt="logo" src='/images/pokemon-logo.png'/>
          }
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
