import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PokeHeader from './components/PokeHeader/PokeHeader.jsx'
import PokeNavBar from './components/PokeNavBar/PokeNavBar.jsx'
import PokeHome from './components/PokeHome/PokeHome.jsx'
import CatchAPokemon from './components/CatchAPokemon/CatchAPokemon.jsx'
import PokeDex from './components/PokeDex/PokeDex.jsx'

function App() {
  return (
    <div className="App">
      <PokeHeader/>
      <PokeNavBar/>
      <Route
        exact path='/'
        component={PokeHome}
      />
      <Route
        exact path='/CatchaPokemon'
        component={CatchAPokemon}
      />
      <Route
        exact path='/PokeDex'
        component={PokeDex}
      />
    </div>
  );
}

export default App;
