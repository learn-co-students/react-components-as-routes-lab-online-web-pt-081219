import React from 'react';
import { movies } from '../data';

const movieGenres = (genres) => {
return genres.map(g => <li>{g}</li>)
}

const createMovies = () => {
  return movies.map(m => 
    <div>
      <h3>Title: {m.title}</h3>
      <p>Time: {m.time}</p>
      Genres:
      <ul>
        <li>{movieGenres(m.genres)}</li>
      </ul>
    </div>)
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {createMovies()}
    </div>
  );
};

export default Movies;
