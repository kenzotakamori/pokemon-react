import React from 'react'

class Pokemon extends React.Component {
  render() {
    const info = this.props.info;
    const styles = {
      'display': info.display ? 'block' : 'none'
    }

    return (
      <div className="Pokemon" style={styles}>
        <img 
          src={info.imgUrl}
          alt={info.name}/>
        <span>{info.name}</span>
      </div>
    );
  }
}
  
export default Pokemon;