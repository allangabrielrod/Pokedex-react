import PokeCard from "../poke-card/poke-card.component";

import "./card-list.styles.scss";

const CardList = ({ pokemons }) => (
  <div className="card-list">
    {pokemons.map(({ id, name, types }) => (
      <PokeCard key={id} id={id} name={name} types={types} />
    ))}
  </div>
);

export default CardList;
