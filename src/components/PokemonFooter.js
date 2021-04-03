import React from 'react';

class PokemonFooter extends React.Component {
  render() {
    const height = this.props.isOpen ? '10vh' : '49vh'; 
    const styles = {
      'height': height
    };
    const rowStyles = {
      'lineHeight': height
    }

    return (
      <footer style={styles}>
        <div className="row-icons" style={rowStyles}>
          <a 
            href="https://www.linkedin.com/in/marcelo-kenzo-takamori/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/kenzotakamori"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/marcelokenzot/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/marcelokenzot/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </footer>
    );
  };
};

export default PokemonFooter;