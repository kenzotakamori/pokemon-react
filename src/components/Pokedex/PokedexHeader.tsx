import { CSSTransition } from 'react-transition-group';

import '../../css/Pokedex/Header.scss';
import pokeLogo from '../../images/logo-pokemon.png';

const PokedexHeader = (props: any) => {
  return (
    <header>
      <div className={props.isOpen ? 'red-section header-open' : 'red-section'}>
        <nav>
          <ul>
            <li key="home">Opção 1</li>
            <li key="home-2">Opção 2</li>
            <CSSTransition
              classNames="poke-logo"
              in={props.isOpen}
              timeout={{
                appear: 1000,
                enter:1000,
                exit: 1000,
              }}
              unmountOnExit
            >
              <img alt="logo" src={pokeLogo}/>
            </CSSTransition>
            <li key="home-3">Opção 3</li>
            <li key="home-4">Opção 4</li>
          </ul>
        </nav>
        
      </div>
      <div className="black-section">
        <div className="black-circle">
          <div className="white-circle">
            <div className="white-poke-button" onClick={props.togglePokeball}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PokedexHeader;
