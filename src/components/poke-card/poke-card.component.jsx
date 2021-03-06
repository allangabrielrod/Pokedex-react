import "./poke-card.styles.scss";

const PokeCard = ({ id, name, types }) => (
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
      {types.map(({ type }) => (
        <p className={`poke-type ${type.name}`}>{type.name}</p>
      ))}
    </span>
  </div>
);

export default PokeCard;
