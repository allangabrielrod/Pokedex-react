import { ReactComponent as Pokeball } from "../../assets/pokeball.svg";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
  <header className="header">
    <Link to="/">
      <div className="logo">
        <Pokeball className="header-pokeball" />
        <h1 className="logo-text">
          POKE<span className="logo-red">DEX</span>
        </h1>
      </div>
    </Link>
  </header>
);

export default Header;
