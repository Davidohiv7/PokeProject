import { SEARCH_SPECIE, FAILED_SEARCH, SEARCHING_POKEMON, SEARCH_POKEMON, CATCH_POKEMON_YES, CATCH_POKEMON_NO, SHOW_DETAILS, RELEASE_POKEMON } from '../action_types/action_types.js'

const initialState = {
    searchedPokemon: { status: 'NoFoundPokemon'},
    caughtPokemons: [],
    pokemonForDetails: null
  };

  export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_POKEMON:
          if(action.payload){
            return {
              ...state,
              searchedPokemon: {
                name: action.payload.name.charAt(0).toUpperCase() + action.payload.name.slice(1),
                id: action.payload.id,
                height: action.payload.height,
                weight: action.payload.weight,
                moves: action.payload.moves === 0 ? action.payload.moves[0].move.name : 'Moves still undetermined',
                img: action.payload.sprites.front_default,
                imgBack: action.payload.sprites.back_default,
                imgShiny: action.payload.sprites.front_shiny,
                baseExperience: action.payload.base_experience,
                mainType: action.payload.types[0].type.name.charAt(0).toUpperCase() + action.payload.types[0].type.name.slice(1)
              }
            }
          }else{
            return {...state}
          }
        case SEARCH_SPECIE:
          return {
            ...state,
            searchedPokemon: {...state.searchedPokemon, 
              color: action.payload.color.name.charAt(0).toUpperCase() + action.payload.color.name.slice(1),
              description: action.payload.flavor_text_entries.find(current => current.language.name === 'en').flavor_text
             }
          }
        case CATCH_POKEMON_YES:
          if(state.caughtPokemons.filter(currentPokemon => currentPokemon.id !== action.payload.id).length === state.caughtPokemons.length || state.caughtPokemons.length === 0) {
            return {
              ...state,
              caughtPokemons: [...state.caughtPokemons, action.payload],
              searchedPokemon: { status: 'NoFoundPokemon'}
            }
          }else {
            alert('This pokemon is already caught')
            return {...state}
          }
          
        case CATCH_POKEMON_NO:
          return {
            ...state,
            searchedPokemon: { status: 'NoFoundPokemon'},
          }
        case SHOW_DETAILS:
          return {
            ...state,
            pokemonForDetails: action.payload
          }
          case RELEASE_POKEMON:
          return {
            ...state,
            caughtPokemons: state.caughtPokemons.filter(currentPokemon => currentPokemon.id !== action.payload.id)
          }
          case SEARCHING_POKEMON:
          return {
            ...state,
            searchedPokemon: {status: 'Loading', img: action.payload}
          }
          case FAILED_SEARCH:
          return {
            ...state,
            searchedPokemon: {status: 'NoFoundPokemon'}
          }
        default:
          return {...state}
    }
  } 