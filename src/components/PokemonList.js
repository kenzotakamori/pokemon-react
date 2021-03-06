import React from 'react'
import Pokemon from './Pokemon'

class PokemonList extends React.Component {
  render() {
    const pokemonsComponent = this.props.data.map((pokemon) => 
      <Pokemon
        key={pokemon.name}
        info={pokemon}
        handlePokemonClick={this.props.handlePokemonClick}
      />
    )

    return (
      <div className="PokemonList">
        {pokemonsComponent}
      </div>
    );
  }
}

export default PokemonList;