import React from 'react';
import { movies } from '../data';

const showMovie = (movie) => {
  return (
  <div key={movie.title}>
    <h2>{movie.title}</h2>
    <p>Time: {movie.time} minutes</p>
      <ul>
        {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
  </div>
  )
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => 
          showMovie(movie)
        )}
    </div>
  );
};

export default Movies;
