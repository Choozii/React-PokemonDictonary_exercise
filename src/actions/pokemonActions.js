import axios from 'axios';

export const getPokemonList = page => async dispatch => {
    try {
        dispatch({
            type: 'POKEMON_LIST_LOADING'
        });

        const limit = 15;
        const offset = (page - 1) * limit;
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);

        dispatch({
            type: 'POKEMON_LIST_SUCCESS',
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: 'POKEMON_LIST_FAIL',
        });
    }
}

export const getPokemon = name => async dispatch => {
    try {
        dispatch({
            type: 'POKEMON_MULTIPLE_LOADING'
        });

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

        dispatch({
            type: 'POKEMON_MULTIPLE_SUCCESS',
            payload: res.data,
            pokemonName:name
        });
    } catch (e) {
        dispatch({
            type: 'POKEMON_MULTIPLE_FAIL',
        });
    }
}