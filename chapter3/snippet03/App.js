import React from 'react';
import { Fragment } from 'react';
import Movie from './Movie.js';

function App() {
  return (
    <Fragment>
      <Movie title="The Godfather" director="Francis Coppola" year="1972" rating="5" backgroundColor="#FFF" foregroundColor="red" borderColor="red" />
      <Movie title="Eyes Wide Shut" director="Stanley Kubrick" year="1999" rating="3" backgroundColor="#EEE" foregroundColor="blue" borderColor="blue"  />
      <Movie title="The Hundred-Foot Journey" director="Lasse Hallstrom" year="2014" rating="5" backgroundColor="#DDD" foregroundColor="green" borderColor="green"  />
    </Fragment>

  );
}

export default App;