import { Component } from "react";
import Homepage from "./pages/homepage/homepage.component";

import Loading from "./components/loading/loading.component";
import Header from "./components/header/header.component";

import "./App.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      pokeHabitats: [],
      ready: false,
    };
  }

  async componentDidMount() {
    const pokemons = [];
    const pokeHabitats = [];

    //request all habitats available
    for (let i = 1; i <= 9; i++) {
      const pokeURL = `https://pokeapi.co/api/v2/pokemon-habitat/${i}`;

      try {
        const req = await fetch(pokeURL);
        const pokeHabInfo = await req.json();

        pokeHabitats.push(pokeHabInfo);
      } catch (e) {
        console.error(e);
      }
    }

    //request 150 pokemons
    for (let i = 1; i <= 150; i++) {
      const pokeURL = `https://pokeapi.co/api/v2/pokemon/${i}`;

      try {
        const req = await fetch(pokeURL);
        const pokeInfo = await req.json();

        pokeHabitats.forEach((pokeHabitat) => {
          const checkHab = pokeHabitat.pokemon_species.find(
            ({ name }) => name === pokeInfo.name
          );

          if (checkHab) pokeInfo.habitat = pokeHabitat.name;
        });

        pokemons.push(pokeInfo);
      } catch (e) {
        console.error(e);
        console.error("Ocorreu algum erro :/");
      }
    }

    this.setState({ pokemons, pokeHabitats, ready: true });
  }

  render() {
    const { pokemons, ready } = this.state;

    if (!ready) return <Loading />;

    return (
      <div className="App">
        <Header />
        <Homepage pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
