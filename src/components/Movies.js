import React from 'react';
import { movies } from '../data';

const generateMovies = () => {
  return movies.map(m => {
    return(
      <div>
        {m.title}
        <br/>
        {m.time}
        <ul>
          {m.genres.map(g => <li>{g}</li>)}
        </ul>
      </div>
    )
  })
}

const Movies = () => {

  return (
    <div>
        <h1>Movies Page</h1>
        {generateMovies()}
    </div>
  );
};

export default Movies;
