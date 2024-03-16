//Llamando a los pokemones con un limite de cincuenta
export const getAllPokemons = async (limit, offset) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
    });

    const results = await Promise.all(promises);

    return results;

};

//Llamando a todos los pokemones
export const getGlobalPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
    });

    const results = await Promise.all(promises);

    return results;
};

//Llamando a un pokemon por su ID
export const getPokemonByID = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
};
