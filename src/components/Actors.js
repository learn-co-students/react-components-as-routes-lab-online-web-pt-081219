import React from 'react';
import { actors } from '../data';

const Actors = () => {

  function renderActors()  {
    return actors.map((actor) =>
  <div>{actor.name} {actor.movies.join(" ")}</div>
    )
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
