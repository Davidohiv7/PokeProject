import React, { useState } from 'react';
import './CaughtPokemons.css';
import { connect } from "react-redux";
import { showDetails, freePokemon } from '../../../actions/actions.js'

function CaughtPokemons( { caughtPokemons, showDetails, freePokemon }) {
    return (
        <div className='caughtPokemonsContainer'>
            {
                caughtPokemons.length === 0 ? <p id='NoCaughtPokemon'>You haven`t catched any Pokemon</p> :
                <div>
                    <h4>These are your caught Pokemons</h4>
                    <div className='caughtPokemonsList'>
                        {caughtPokemons.map(currentPokemon => 
                        <div>
                            <span id='titleCaught'>{currentPokemon.name}</span>
                            <img src={currentPokemon.img} alt={currentPokemon.name} />
                            <button id='freePokemonButton' onClick={() => freePokemon(currentPokemon)}>FreePokemon</button>
                        </div>)}
                    </div>
                </div>
            }
        </div>

    )   
}

  
  function mapStateToProps(state) {
    return {
        caughtPokemons: state.caughtPokemons
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        showDetails: pokemon => dispatch(showDetails(pokemon)),
        freePokemon: pokemon => dispatch(freePokemon(pokemon))
    };
  }

  
  export default connect(mapStateToProps, mapDispatchToProps )(CaughtPokemons);