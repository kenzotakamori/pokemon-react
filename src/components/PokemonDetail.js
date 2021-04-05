import React from 'react';

class PokemonDetail extends React.Component { 
  getTypes(types) {
    return types?.map((t) => t.type.name).join(', ');
  }
  render() {
    const info = this.props.selectedPokemon;
    if (!info) return;

    return (
      <div className="PokemonDetail">
        <span className="pokemon-name">
          <code>{info.name}</code>
        </span>
        <div className="pokemon-image-container">
          <img alt={info.name} src={info?.sprites?.front_default}/>
        </div>
        <div className="pokemon-detail-list">
          <span>
            <code>
              <b>Pokédex: </b>#{info.id}
            </code>
          </span>
          <span>
            <code>
              <b>Weight: </b>{info.weight}
            </code>
          </span>
          <span>
            <code>
              <b>Height: </b>{info.height}
            </code>
          </span>
          <span>
            <code>
              <b>Types: </b>{this.getTypes(info.types)}
            </code>
          </span>
          <span>
            <code>
              <b>Double Damage FROM: </b>
            </code>
          </span>
          <span>
            <code>
              <b>Double Damage TO: </b>
            </code>
          </span>
          <span>
            <code>
              <b>Half Damage FROM: </b>
            </code>
          </span>
          <span>
            <code>
              <b>Half Damage FROM: </b>
            </code>
          </span>
        </div>
      </div>
    );
  }
}

export default PokemonDetail;