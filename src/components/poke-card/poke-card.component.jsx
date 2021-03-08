import { Link } from "react-router-dom";
import "./poke-card.styles.scss";

const PokeCard = ({ id, name, types }) => (
  <Link to={`/pokemon/${name}`}>
    <div className="poke-card">
      <img
        className="poke-card-img"
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        alt={`[${name}]`}
      />
      <p className="poke-id">
        {`Nº${id < 10 ? "00" : id < 100 ? "0" : ""}${id}`}
      </p>
      <h3 className="poke-card-name">{`${name}`}</h3>
      <span className="poke-types">
        {types.map(({ type }, id) => (
          <p key={id} className={`poke-type ${type.name}`}>
            {type.name}
          </p>
        ))}
      </span>
    </div>
  </Link>
);

export default PokeCard;
