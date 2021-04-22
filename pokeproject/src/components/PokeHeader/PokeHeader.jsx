import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './../../img/headerIcon.png'
import './PokeHeader.css';

export default function PokeHeader(props) {
    return (
        <div id='pokeHeader'>
            
            <Link to={'/'}>
                <img id='pokeHeaderIcon' src={Icon} alt='Not found'></img>
                <p id='pokeHeaderTitle'>David`s Pokepage</p>
            </Link>
 
        </div>
        );
  };