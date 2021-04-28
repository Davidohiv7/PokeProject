import React, { useState } from 'react';
import './SearchedPokemon.css';
import { connect } from "react-redux";
import { catchPokemon, doNotCatchPokemon } from '../../../actions/actions.js'

function SearchedPokemon( { searchedPokemon, catchPokemon, doNotCatchPokemon }) {
    return(
        <div className='searchedPokemonContainer ' >
            {
                searchedPokemon.status === 'NoFoundPokemon' ? <p className='NoPokemonSearched' > Try searching a Pokemon by its Name or ID in the searchbar</p> :
                    searchedPokemon.status === 'Loading' ? 
                    <div id='pokeSearchGlassContainer'>
                        <img id='pokeSearchGlass' src={searchedPokemon.img} alt='Loading' /> 
                    </div> :
                    
                        <div id='searchedPokemonInfoContainer' >
                            <span>You found a wild</span>
                            <span> {searchedPokemon.name}!!!</span>
                            <img id='pokemonImg' src={searchedPokemon.img} alt={searchedPokemon.name} />
                            <div id='catchButtons'>
                                <span>Do you want to cacth it?</span>     
                                <button id='buttonYes' onClick={() => catchPokemon(searchedPokemon)}>Yes</button>
                                <button id='buttonNo' onClick={() => doNotCatchPokemon()}>No</button>
                            </div>
                        </div>
                }
        </div>
    )
}


  function mapStateToProps(state) {
    return {
        searchedPokemon: state.searchedPokemon
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        catchPokemon: pokemon => dispatch(catchPokemon(pokemon)),
        doNotCatchPokemon: () => dispatch(doNotCatchPokemon())
    };
  }

  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchedPokemon);