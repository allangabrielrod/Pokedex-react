import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import PokeProfile from "./pages/poke-profile/poke-profile.component";

import Loading from "./components/loading/loading.component";
import NotFound from "./components/notfound/not-found.component";
import Header from "./components/header/header.component";

import "./App.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      pokeHabitats: [],
      pokeTypes: [],
      ready: false,
    };
  }

  async componentDidMount() {
    const pokemons = [];
    const pokeHabitats = [];
    const pokeTypes = [];

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

        pokeInfo.types.forEach(({ type: { name } }) => {
          if (!pokeTypes.includes(name)) pokeTypes.push(name);
        });

        pokemons.push(pokeInfo);
      } catch (e) {
        console.error(e);
        console.error("Ocorreu algum erro :/");
      }
    }

    this.setState({ pokemons, pokeHabitats, pokeTypes, ready: true });
  }

  render() {
    const { pokemons, pokeHabitats, pokeTypes, ready } = this.state;

    if (!ready) return <Loading />;

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Homepage
                {...props}
                pokemons={pokemons}
                habitats={pokeHabitats}
                types={pokeTypes}
              />
            )}
          />
          <Route
            exact
            path="/pokemon/:id"
            render={(props) => <PokeProfile {...props} pokemons={pokemons} />}
          />

          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
