import React, { useState } from 'react';
import './PokeSearchBar.css';
import { connect } from "react-redux";
import { getPokemon } from '../../../actions/actions.js'
import pokeBallIcon from './../../../img/pokeBallIcon.png';

export function validate(input) {
    let error = '';
    if (!input) {
      error = 'Pokemon ID or Name is required';
    }
    return error;
  };



function PokeSearchbar( { getPokemon }) {
    const [pokemon, setPokemon] = useState('');
    const [error, setError] = useState('');


    const handleInputChange = function(e) {
        setPokemon(e.target.value)
        setError(validate(e.target.value))
      }

    const onButtonClick = (e) => {
      e.preventDefault();
      let randomNumber = Math.floor(Math.random() * 898 + 1);
      getPokemon(randomNumber)
    }
    
    return (
      <div id='searchContainer'>
        <form className='pokeSearchbar' onSubmit={e => {
            e.preventDefault();
            getPokemon(pokemon)
          }}>
            <div>
              <input type="text" onChange={handleInputChange} name="pokeInput" value={pokemon}/>
              <button>Search a Pokemon</button>
            </div>
        </form>
        <form id='catchRandomForm' onSubmit={onButtonClick}>
          <label>Search a random Pokemon, just by clicking the PokeBall</label>
          <input type='image' id='randomPokeButton' src={pokeBallIcon} ></input>
        </form>
      </div>
        
    )
  }

  
  function mapDispatchToProps(dispatch) {
    return {
        getPokemon: pokemon => dispatch(getPokemon(pokemon))
    };
  }
  
  export default connect(null, mapDispatchToProps)(PokeSearchbar);