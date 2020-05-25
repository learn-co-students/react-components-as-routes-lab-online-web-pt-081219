import React from 'react';
import { directors } from '../data';

const directorMovies = (movies) => {
  return movies.map(m => <li>{m}</li>)
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d => (
        <div>
          <h4>{d.name}</h4>  
          Movies:
          <ul>
            {directorMovies(d.movies)}
           </ul>
        </div>
      ))} 
    </div>
  );
}

export default Directors
