import { SEARCH_SPECIE, FAILED_SEARCH, SEARCHING_POKEMON, SEARCH_POKEMON, CATCH_POKEMON_YES, CATCH_POKEMON_NO, SHOW_DETAILS, RELEASE_POKEMON } from '../action_types/action_types.js'

export function getPokemon(pokemon) {
    return function(dispatch) {
      dispatch({ type: SEARCHING_POKEMON, payload: 'https://img.icons8.com/cotton/2x/search--v2.png' })
      return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(foundPokemon => foundPokemon.json())
        .then(foundPokemon => {
          dispatch({ type: SEARCH_POKEMON, payload: foundPokemon })
          return fetch(`https://pokeapi.co/api/v2/pokemon-species/${foundPokemon.id}/`)
        })
        .then(foundSpecie => foundSpecie.json())
        .then(foundSpecie => dispatch({ type: SEARCH_SPECIE, payload: foundSpecie }))
        .catch(() => {
          dispatch({ type: FAILED_SEARCH })
          alert('We couldnt find the pokemon, try with other Name or ID')
        })
    };
  }

export function catchPokemon(payload) {
  return {
    type: CATCH_POKEMON_YES,
    payload
  }
}

export function doNotCatchPokemon() {
  return {
    type: CATCH_POKEMON_NO
  }
}

export function showDetails(payload) {
  return {
    type: SHOW_DETAILS,
    payload
  }
}

export function releasePokemon(payload) {
  return {
    type: RELEASE_POKEMON,
    payload
  }
}

