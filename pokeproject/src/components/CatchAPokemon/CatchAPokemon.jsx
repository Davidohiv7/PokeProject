import React, { useState } from 'react';
import './CatchAPokemon.css';
import PokeSearchbar from './PokeSearchBar/PokeSearchBar.jsx'
import SearchedPokemon from './SearchedPokemon/SearchedPokemon.jsx'
import CaughtPokemons from './CaughtPokemons/CaughtPokemons.jsx'



export default function CatchAPokemon() {
    return (
      <div className='catchAPokemonContainer'>
          <PokeSearchbar/>
          <SearchedPokemon/>
          <CaughtPokemons/>
      </div>  
    )
  }
