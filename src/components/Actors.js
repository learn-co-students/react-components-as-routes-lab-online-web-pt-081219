import React from 'react';
import { actors } from '../data';

const generateActors = () => {
  return actors.map(a => {
    return (
      <div>
        {a.name}
        <ul>
          {a.movies.map(m => <li>{m}</li>)}
        </ul>
      </div>
    )
  })
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {generateActors()}
    </div>
  );
};

export default Actors;
