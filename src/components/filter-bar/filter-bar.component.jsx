import Select from "../select/select.component";
import Option from "../option/option.component";

import "./filter-bar.styles.scss";

const FilterBar = ({ filterChange, habitats, types }) => (
  <nav className="filter-bar">
    <Select
      id="pokemon-type"
      label="Type: "
      name="type"
      filterChange={filterChange}
    >
      <Option key="1" value="all" />
      {types.map((type, id) => (
        <Option key={id + 1} value={type} />
      ))}
    </Select>

    <Select
      id="pokemon-habitat"
      label="Habitat: "
      name="habitat"
      filterChange={filterChange}
    >
      <Option key="1" value="all" />
      {habitats.map(({ id, name }) => (
        <Option key={id + 1} value={name} />
      ))}
    </Select>
  </nav>
);

export default FilterBar;
