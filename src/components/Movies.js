import React from 'react';
import { movies } from '../data';



const Movies = () => {

  function renderMovies()  {
    return movies.map((movie) =>
  <div>{movie.title} {movie.time} {movie.metascore} {movie.genres.join(" ")}</div>
    )
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
