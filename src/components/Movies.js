import React from 'react';
import { movies } from '../data';

const printMovie = movie => {
  return (
    <div className="movie">
      <strong>{movie.title}</strong>
      <p>Length: {movie.time}</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => printMovie(movie))}
    </div>
  );
};

export default Movies;
