import React from 'react';
import { Link } from 'react-router-dom';

export default function PokeNavButtons(props) {
  if(props.name === 'Home') {
    return (
      <Link to={'/'}>
        <p className='pokeButtons'>{props.name}</p>
      </Link>
    )
  }else{
    let linkName = props.name.replaceAll(' ', '')
    return (

      <Link to={`/${linkName}`}>
        <p className='pokeButtons'>{props.name}</p>
      </Link>
    )
  }
};