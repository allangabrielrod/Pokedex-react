import PokeCard from "../poke-card/poke-card.component";
import NotFound from "../notfound/not-found.component";

import "./card-list.styles.scss";

const CardList = ({ pokemons }) => {
  if (!pokemons.length) return <NotFound />;

  return (
    <div className="card-list">
      {pokemons.map(({ id, name, types }) => (
        <PokeCard key={id} id={id} name={name} types={types} />
      ))}
    </div>
  );
};

export default CardList;
