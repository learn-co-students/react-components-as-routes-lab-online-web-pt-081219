import React from 'react';
import { directors } from '../data';

const printDirector = director => {
  return (
    <div className="director">
      <strong>{director.name}</strong>
      <ul>
        {director.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
}


const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => printDirector(director))}
    </div>
  );
}

export default Directors
