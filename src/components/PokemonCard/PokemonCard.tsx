import "./PokemonCard.css";

interface PokemonInterface {
    name: string,
    imgSrc?: string
}

interface PokemonCardProps {
  pokemon : PokemonInterface
}

const PokemonCard = ( {pokemon}: PokemonCardProps ) => {
    return (
        <figure> 
            {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p> }
            <figcaption>{pokemon.name}</figcaption> 
        </figure>
    )
}

export default PokemonCard;