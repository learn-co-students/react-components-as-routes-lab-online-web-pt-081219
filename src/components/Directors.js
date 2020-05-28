import React from 'react';
import { directors } from '../data';

const generateDirectors = () => {
  return directors.map(d => {
    return(
      <div>
        {d.name}
        <ul>
          {d.movies.map(m => <li>{m}</li>)}
        </ul>
      </div>
    )
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {generateDirectors()}
    </div>
  );
}

export default Directors
