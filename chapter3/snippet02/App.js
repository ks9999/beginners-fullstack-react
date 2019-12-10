import React from 'react';
import Movie from './Movie.js';

function App() {
  return (
    <div>
      <Movie title="The Godfather" director="Francis Coppola" year="1972" rank="5"/>
      <Movie title="Eyes Wide Shut" director="Stanley Kubrick" year="1999" rank="3"/> 
      <Movie title="The Hundred-Foot Journey" director="Lasse Hallstrom" year="2014" rank="5"/>     
    </div> 
  );
}

export default App;
