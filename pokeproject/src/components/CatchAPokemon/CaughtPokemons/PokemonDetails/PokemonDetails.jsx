import React from 'react';
import './PokemonDetails.css';
import { connect } from "react-redux";
import { showDetails } from '../../../../actions/actions.js'
import { Link } from 'react-router-dom';

function PokemonDetails( { pokemonForDetails, showDetails }) {


    return (

            <div className='wholeContainer'>
                <div id='pokemonDetailsContainer' >

                <Link id='pokeCloseButton'to={`/CatchaPokemon/`} onClick={() => showDetails(null)}>
                    X
                </Link>
                

                <div id='pokeData'>

                    <p><span>Name: </span>{pokemonForDetails.name}</p>
                    <p><span>ID: </span>{pokemonForDetails.id}</p>
                    <p><span>Height: </span>{pokemonForDetails.height}</p>
                    <p><span>Weight: </span>{pokemonForDetails.weight}</p>
                    <p><span>Moves: </span>{pokemonForDetails.moves}</p>
                    <p><span>Base Experience: </span>{pokemonForDetails.baseExperience}</p>
                    <p><span>Main Type: </span>{pokemonForDetails.mainType}</p>
                    <p><span>Color: </span>{pokemonForDetails.color}</p>
                    

                </div>

                <div id='imgContainer'>

                    <img src={pokemonForDetails.img} alt='Notfound'/>
                    <img src={pokemonForDetails.imgBack} alt='Notfound'/> 
                    <img src={pokemonForDetails.imgShiny} alt='Notfound'/>  

                </div>

                <div>

                    <p> Description:</p>
                    <p id='pokeDescription'>{pokemonForDetails.description}</p>

                </div>

                    

                </div>
            </div>
        
    )   
}

  
  function mapStateToProps(state) {
    return {
        pokemonForDetails: state.pokemonForDetails
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        showDetails: pokemon => dispatch(showDetails(pokemon))
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps )(PokemonDetails);