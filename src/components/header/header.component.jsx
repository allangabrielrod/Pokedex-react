import { ReactComponent as Pokeball } from "../../assets/pokeball.svg";

import "./header.styles.scss";

const Header = () => (
  <header className="header">
    <Pokeball className="header-pokeball" />
    <h1 className="logo-text">
      POKE<span className="logo-red">DEX</span>
    </h1>
  </header>
);

export default Header;
