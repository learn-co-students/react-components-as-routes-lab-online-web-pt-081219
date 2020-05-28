import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {
        directors.map(director => {
          return (
            <div key={director.name}>
              <h3>Name: {director.name}</h3>
              <p>Movies:
                <ul>
                  {director.movies.map(movie => <li key={movie}>{movie}</li>)}
                </ul>
              </p>
            </div>
          )
        })
      }
    </div>
  );
}

export default Directors
