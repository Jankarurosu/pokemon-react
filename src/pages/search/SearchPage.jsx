import { useContext } from "react"
import { PokemonContext } from "../../context/PokemonContext"
import { useLocation } from "react-router-dom"
import { CardPokemon } from "../../components"

export const SearchPage = () => {
    const location = useLocation()
    const { globalPokemons } = useContext(PokemonContext)

    const searchTerm = location.state && location.state.toLowerCase().trim()

    const filteredPokemons = searchTerm ? globalPokemons.filter(pokemon =>
        pokemon.name.includes(searchTerm)
    ) : []

    const renderResults = () => {
        if (!searchTerm || filteredPokemons.length === 0) {
            return <h3>No se encontraron resultados.</h3>
        } else {
            return (
                <div className="card-list-pokemon container">
                    {filteredPokemons.map(pokemon => (
                        <CardPokemon pokemon={pokemon} key={pokemon.id} />
                    ))}
                </div>
            )
        }
    }

    return (
        <div className="container">
            <p className="p-search">
                Se encontraron <span>{filteredPokemons.length}</span> resultados:
            </p>
            {renderResults()}
        </div>
    )
}


