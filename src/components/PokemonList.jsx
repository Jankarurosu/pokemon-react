import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import { CardPokemon } from "./CardPokemon"
import { Loader } from "./Loader"

export const PokemonList = () => {

    const { allPokemons, loading, filteredPokemons, onClickLoadMore } = useContext(PokemonContext)

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="card-list-pokemon container">
                            {filteredPokemons.length ? (
                                filteredPokemons.map(pokemon => (
                                    <CardPokemon pokemon={pokemon} key={pokemon.id} />
                                ))
                            ) : (
                                allPokemons.map(pokemon => (
                                    <CardPokemon pokemon={pokemon} key={pokemon.id} />
                                ))
                            )}
                        </div>
                        <div className="container-btn-load-more container">
                            <button className="btn-load-more" onClick={onClickLoadMore}>
                                Cargar más
                            </button>
                        </div>
                    </>
                )
            }
        </>
    )
}



