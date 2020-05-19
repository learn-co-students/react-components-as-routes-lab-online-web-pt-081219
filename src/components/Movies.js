import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie =>
          <div key={movie.title}> 
            <h1>{movie.title}</h1>
            <h2> Run Time: {movie.time}</h2>
            <ul>
              {movie.genres.map(genre =>
                <li key={genre}>{genre}</li>
              )}
            </ul>
          </div>
          )}
    </div>
  );
};

export default Movies;
