import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemon } from '../actions/pokemonActions';

const Pokemon = (props) => {
    const dispatch = useDispatch();
    const pokemonName = props.match.params.pokemon;
    const pokemonState = useSelector(state => state.pokemon);

    useEffect(() => {
        dispatch(getPokemon(pokemonName));
    }, []);

    const showData = () => {
        if(pokemonState.data[pokemonName]){
            const pokeData = pokemonState.data[pokemonName];
            return(
                <div className="pokemonPage">
                   <div className="item">
                        <h5>figures</h5>
                        <img src={pokeData.sprites.front_default} alt=""/>
                        <img src={pokeData.sprites.back_default} alt=""/>
                        <img src={pokeData.sprites.front_shiny} alt=""/>
                        <img src={pokeData.sprites.back_shiny} alt=""/>
                    </div>
                    <div className="item">
                    <h5>Stats</h5>
                    {pokeData.stats.map(el => {
                    return <div className="item__description">{el.stat.name} {el.base_stat}</div>
                    })}
                </div>
                <div className="item">
                    <h5>Abilities</h5>
                    {pokeData.abilities.map(el => {
                    return <div className = "item__description">{el.ability.name}</div>
                    })}
                </div>
                </div>
            )
        }
    }


    return (
        <div>
            {showData()}
        </div>
    );
};

export default Pokemon;