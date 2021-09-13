import { CSSTransition } from 'react-transition-group';

import '../../css/Pokedex/Header.scss';
import pokeLogo from '../../images/logo-pokemon.png';

const PokedexHeader = (props: any) => {
  return (
    <header>
      <div className={props.isOpen ? 'red-section header-open' : 'red-section'}>
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
