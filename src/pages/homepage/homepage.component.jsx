import { Component } from "react";

import CardList from "../../components/card-list/card-list.component";
import FilterBar from "../../components/filter-bar/filter-bar.component";

import "./homepage.styles.scss";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        type: "all",
        habitat: "all",
      },
    };
  }

  filterPokemons = () => {
    const { type, habitat } = this.state.filters;
    const { pokemons } = this.props;

    return pokemons.filter((pokemon) => {
      const typeCheck = pokemon.types.find(
        (pokeType) => pokeType.type.name === type
      );

      const habitatCheck = pokemon.habitat === habitat;

      if (type === "all" && habitat === "all") return true;

      if (type !== "all" && habitat === "all") return typeCheck;

      if (type === "all" && habitat !== "all") return habitatCheck;

      return typeCheck && habitatCheck;
    });
  };

  handleOption = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      return {
        filters: {
          ...prevState.filters,
          [name]: value,
        },
      };
    });
  };

  render() {
    const { habitats, types } = this.props;
    return (
      <div className="homepage">
        <FilterBar
          filterChange={this.handleOption}
          habitats={habitats}
          types={types}
        />
        <CardList pokemons={this.filterPokemons()} />
      </div>
    );
  }
}

export default Homepage;
