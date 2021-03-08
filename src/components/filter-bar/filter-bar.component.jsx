import "./filter-bar.styles.scss";

const FilterBar = ({ filterChange }) => (
  <nav className="filter-bar">
    <div className="select">
      <label htmlFor="type" className="select-label">
        Tipo:
      </label>
      <select
        name="type"
        id="tipo-pokemon"
        className="filter-select"
        onChange={filterChange}
      >
        <option key="1" value="all" defaultValue>
          Todos
        </option>
        <option key="2" value="normal">
          Normal
        </option>
        <option key="3" value="steel">
          Aço
        </option>
        <option key="4" value="fire">
          Fogo
        </option>
        <option key="5" value="grass">
          Grama
        </option>
        <option key="6" value="electric">
          Elétrico
        </option>
        <option key="7" value="water">
          Àgua
        </option>
        <option key="8" value="ice">
          Gelo
        </option>
        <option key="9" value="ground">
          Terra
        </option>
        <option key="10" value="rock">
          Pedra
        </option>
        <option key="11" value="fairy">
          Fada
        </option>
        <option key="12" value="poison">
          Veneno
        </option>
        <option key="13" value="bug">
          Inseto
        </option>
        <option key="14" value="dragon">
          Dragão
        </option>
        <option key="15" value="psychic">
          Psiquico
        </option>
        <option key="16" value="flying">
          Voador
        </option>
        <option key="17" value="fighting">
          Lutador
        </option>
      </select>
    </div>

    <div className="select">
      <label htmlFor="habitat" className="select-label">
        Habitat:
      </label>
      <select
        name="habitat"
        id="habitat-pokemon"
        className="filter-select"
        onChange={filterChange}
      >
        <option key="1" value="all" defaultValue>
          Todos
        </option>
        <option key="2" value="cave">
          Caverna
        </option>
        <option key="3" value="forest">
          Floresta
        </option>
        <option key="4" value="grassland">
          Mato
        </option>
        <option key="5" value="mountain">
          Motanha
        </option>
        <option key="6" value="rare">
          Raro
        </option>
        <option key="7" value="rough-terrain">
          Rough Terrain
        </option>
        <option key="8" value="sea">
          Mar
        </option>
        <option key="9" value="urban">
          Urbano
        </option>
        <option key="10" value="waters-edge">
          Água
        </option>
      </select>
    </div>
  </nav>
);

export default FilterBar;
