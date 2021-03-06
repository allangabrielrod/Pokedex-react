import { Component } from "react";
import CardList from "./components/card-list/card-list.component";

import "./App.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
    };
  }

  async componentDidMount() {
    const pokemons = [];

    for (let i = 1; i <= 150; i++) {
      const pokeURL = `https://pokeapi.co/api/v2/pokemon/${i}`;

      try {
        const req = await fetch(pokeURL);
        const pokeInfo = await req.json();

        pokemons.push(pokeInfo);
      } catch (e) {
        console.error(e);
      }
    }

    this.setState({ pokemons });
  }

  render() {
    const { pokemons } = this.state;

    return (
      <div className="App">
        <CardList pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
