import React from 'react';
import { actors } from '../data';

const printActor = actor => {
  return (
  <div className="actor">
    <strong>{actor.name}</strong>
    <ul>
      { actor.movies.map( movie => <li>{movie}</li> ) }
    </ul>
  </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { actors.map(actor => printActor(actor)) }
    </div>
  );
};

export default Actors;
