const PokedexFooter = (props: any) => {
  return (
    <footer className={props.isOpen ? 'footer-open' : ''}>
      <div className="row-icons">
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

export default PokedexFooter;