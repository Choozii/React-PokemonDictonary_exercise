import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPokemonList} from '../actions/pokemonActions'
import {Link} from 'react-router-dom';
import '../assets/css/PokemonList.css';

const PokemonList = () => {
    
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonList);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = (page = 1) => {
        dispatch(getPokemonList(page));
    }

    const showData = () => {
        if(pokemonList.data){
            return pokemonList.data.map(pokemon => {
                return (
                <div className="pokemon__list" key={pokemon.name}>
                    <div className="pokemon__item">
                        <div className="pokemon__name">{pokemon.name}</div>
                        <Link className="pokemon__detail" to={`/pokemon/${pokemon.name}`}>more</Link>
                    </div>
                </div>
                )
            });
        }

        if(pokemonList.loading){
            return <p>loading...</p>
        }
        
        if(pokemonList.errorMsg){
            return <p>{pokemonList.errorMsg}</p>
        }
        return <p>unable to get data</p>
    }
    
    return (
        <div>
            {showData()}
        </div>
    );
};

export default PokemonList;