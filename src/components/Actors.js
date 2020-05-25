import React from 'react';
import { actors } from '../data';

const actorMovies = (movies) => {
  return movies.map(m => <li>{m}</li>)
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(a =>( 
          <div>
            <h4>{a.name}</h4>
            Movies:
            <ul>
              {actorMovies(a.movies)}
            </ul>
          </div>
      ))}
    </div>
  );
};

export default Actors;
