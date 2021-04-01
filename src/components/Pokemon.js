import React from 'react'

class Pokemon extends React.Component {
  render() {
    const info = this.props.info;

    return (
      <div className="Pokemon">
        <img 
          src={info.imgUrl}
          alt={info.name}/>
        <span>{info.name}</span>
      </div>
    );
  }
}
  
export default Pokemon;