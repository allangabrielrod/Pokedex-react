import { Link } from "react-router-dom";
import NotFound from "../../components/notfound/not-found.component";
import "./poke-profile.styles.scss";

const PokeProfile = ({ match, pokemons }) => {
  const pokemonId = match.params.id;

  const pokemon = pokemons.find((pokemon) => {
    if (Number(pokemonId)) return pokemon.id === Number(pokemonId);

    return pokemon.name === pokemonId;
  });

  if (!pokemon) return <NotFound />;

  return (
    <section className="poke-profile">
      <Link className="back" to="/">
        &#10096;
      </Link>

      <div className="poke-info">
        <img
          className="poke-profile-image"
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt={`[${pokemon.name}]`}
        />
        <div className="poke-profile-details">
          <h1 className="poke-name">{pokemon.name}</h1>
          <p className="poke-id">
            {`Nº${pokemon.id < 10 ? "00" : pokemon.id < 100 ? "0" : ""}${
              pokemon.id
            }`}
          </p>

          <div className="poke-attribute">
            <h2>Tipos:</h2>
            <span className="poke-types">
              {pokemon.types.map(({ type }, id) => (
                <p key={id} className={`poke-type ${type.name}`}>
                  {type.name}
                </p>
              ))}
            </span>
          </div>

          <div className="poke-attribute">
            <h2>Habitat:</h2>
            <span className="poke-habitat">
              <p className={`habitat-type ${pokemon.habitat}`}>
                {pokemon.habitat}
              </p>
            </span>
          </div>

          <div className="poke-attribute">
            <h2>Habilidades:</h2>
            <span className="poke-abilities">
              {pokemon.abilities.map(({ ability }, id) => (
                <p key={id} className={`ability-type ${ability.name}`}>
                  {ability.name}
                </p>
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokeProfile;
