import { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext"
import { getAllPokemons, getGlobalPokemons, getPokemonByID } from "../actions/pokemon.api"
import { useForm } from "../hook/useForm"

export const PokemonProvider = ({ children }) => {

    const [allPokemons, setAllPokemons] = useState([])
    const [globalPokemons, setGlobalPokemons] = useState([])
    const [offset, setOffset] = useState(0)

    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: ""
    })

    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const results = await getAllPokemons(50, offset)
            setAllPokemons([...allPokemons, ...results])
            setLoading(false)
        }
        fetchData()

    }, [offset])

    useEffect(() => {
        const fetchData = async () => {
            const results = await getGlobalPokemons()
            setGlobalPokemons(results)
            setLoading(false)
        }
        fetchData()
    }, [])

    const onClickLoadMore = () => {
        setOffset(offset + 50)
    }

    const [typeSelected, setTypeSelected] = useState({
        grass: false,
        normal: false,
        fighting: false,
        flying: false,
        poison: false,
        ground: false,
        rock: false,
        bug: false,
        ghost: false,
        steel: false,
        fire: false,
        water: false,
        electric: false,
        psychic: false,
        ice: false,
        dragon: false,
        dark: false,
        fairy: false,
        unknow: false,
        shadow: false
    })

    const [filteredPokemons, setFilteredPokemons] = useState([])

    const handleCheckbox = e => {
        setTypeSelected({
            ...typeSelected,
            [e.target.name]: e.target.checked
        })

        if (e.target.checked) {
            const filteredResults = globalPokemons.filter(pokemon => pokemon.types.map(
                type => type.type.name).includes(e.target.name))
            setFilteredPokemons([...filteredPokemons, ...filteredResults])
        } else {
            const filteredResults = filteredPokemons.filter(pokemon => !pokemon.types.map(
                type => type.type.name).includes(e.target.name))
            setFilteredPokemons([...filteredResults])
        }
    }

    return (
        <PokemonContext.Provider value={{
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemons,
            globalPokemons,
            getPokemonByID,
            onClickLoadMore,
            loading,
            setLoading,
            active,
            setActive,
            handleCheckbox,
            filteredPokemons
        }}>
            {children}
        </PokemonContext.Provider>
    )
}



