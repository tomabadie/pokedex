import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

import PokemonCard from "./components/PokemonCard/PokemonCard";
import NavBar from "./components/NavBar/NavBar";

export const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {

  useEffect(
    () => {
      alert ("hello pokemon trainer :)")
    },
    []
  );

  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon === null) {
    throw new Error("Invalid pokemon name");
  }

  //To get rid of the React Error message below
  /* if(!pokemon) {
      throw new Error("pokemon not found - variable is undefined");
    } */

  return (
    <div>
      <NavBar pokemonList={pokemonList} setPokemonName={setPokemonName} />
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;