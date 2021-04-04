import React from 'react'

class Pokemon extends React.Component {
  render() {
    const info = this.props.info;

    return (
      <div className={info.display ? 'Pokemon' : 'Pokemon hide'}>
        <div className="image-container">
          <img 
            src={info.imgUrl}
            alt={info.name}
            onClick={() => this.props.handlePokemonClick(info.name)}
          />
        </div>
        <span><code>{info.name}</code></span>
      </div>
    );
  }
}
  
export default Pokemon;