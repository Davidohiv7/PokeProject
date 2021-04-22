import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './PokeDex.css';
import { showDetails, freePokemon } from '../../actions/actions.js'


export default function PokeDex() {

    const caughtPokemons = useSelector(state => state.caughtPokemons)
    const dispatch = useDispatch()

    return(
        <div className='searchedPokemonContainer ' >
            {
                caughtPokemons.length === 0 ? <p>Aun no has capturado ningun Pokemon</p> :
                <div>
                    <h4>These are your caught Pokemons</h4>
                    <div className='caughtPokemonsList'>
                        {caughtPokemons.map(currentPokemon => 
                        <div id="pokemonCard" >
                            <span id='titleCaught'>{currentPokemon.name}</span>
                            <input type='image' id='pokemonImg' src={currentPokemon.img} onClick={() => console.log(currentPokemon)}></input>
                            <button id='freePokemon' onClick={() => dispatch(freePokemon(currentPokemon))}>FreePokemon</button>
                        </div>)}
                    </div>
                </div>
            }
        </div>
    )
}