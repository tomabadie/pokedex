import "./NavBar.css";
import type { PokemonProps } from "../PokemonCard/PokemonCard";

interface NavBarProps {
  pokemonList : PokemonProps[];
  setPokemonName : (name:string) => void ;
}

const NavBar = ({pokemonList, setPokemonName} : NavBarProps) => {
  return (
    <nav>
      {pokemonList.map(poke => (
        <button 
          type="button" 
          key={poke.name} 
          onClick={() => {
            setPokemonName(poke.name)
            if (poke.name === "pikachu") {
              alert("pika pikachu !!!")
            }
          }}
        >
          {poke.name}
        </button>
      ))}
    </nav>
  )
}

export default NavBar;