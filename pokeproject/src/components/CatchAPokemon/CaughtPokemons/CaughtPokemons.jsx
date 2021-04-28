import React, { useState } from 'react';
import './CaughtPokemons.css';
import { connect } from "react-redux";
import { releasePokemon, showDetails } from '../../../actions/actions.js'
import { Link } from 'react-router-dom';

function CaughtPokemons( { caughtPokemons, pokemonForDetails, releasePokemon, showDetails }) {

    return (
        <div className='caughtPokemonsContainer'>
            {
                caughtPokemons.length === 0 ? <p id='NoCaughtPokemon'>You haven`t caught any Pokemon</p> :
                <div id='container'>
                    <h4>These are your caught Pokemons</h4>
                    <div className='caughtPokemonsList'>
                        {caughtPokemons.map(currentPokemon => 
                        <div className='caughtPokemon'>
                            <span id='titleCaught'>{currentPokemon.name}</span>
                            <Link to={`/CatchaPokemon/${currentPokemon.id}`}>
                                <img src={currentPokemon.img} alt={currentPokemon.name}  onClick={() =>  showDetails(currentPokemon)} />
                            </Link>
                            <button id='freePokemonButton' onClick={() => releasePokemon(currentPokemon)}>X</button>
                        </div>)}
                    </div>
                </div>
            }
        </div>

    )   
}

  
  function mapStateToProps(state) {
    return {
        caughtPokemons: state.caughtPokemons,
        pokemonForDetails: state.pokemonForDetails
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        releasePokemon: pokemon => dispatch(releasePokemon(pokemon)),
        showDetails: pokemon => dispatch(showDetails(pokemon))
    };
  }

  
  export default connect(mapStateToProps, mapDispatchToProps )(CaughtPokemons);