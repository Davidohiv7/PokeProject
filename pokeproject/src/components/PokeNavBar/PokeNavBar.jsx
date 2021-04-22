import React from 'react';
import PokeNavButtons from './PokeNavButtons.jsx';
import './PokeNavBar.css';

const pokeButtonsList = [
	{name: 'Home'},
	{name: 'Catch a Pokemon'},
	{name: 'PokeDex'}
]

export default function PokeNavBar() {
  return (
  	<div id='PokeNavBar'>
  	  {
  	  	pokeButtonsList.map(currentButton => (
  	  		<PokeNavButtons
  	  		  name={currentButton.name} 
  	  		  link={currentButton.link}
  	  		/>
  	  		)
  	  	)
  	  }
  	</div>
  	);
};