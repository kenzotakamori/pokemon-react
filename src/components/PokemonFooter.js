import React from 'react';

class PokemonFooter extends React.Component {
  render() {
    const height = this.props.isOpen ? '10vh' : '49vh'
    const styles = {
      'height': height
    }

    return (
        <footer style={styles}></footer>
    );
  };
};

export default PokemonFooter;