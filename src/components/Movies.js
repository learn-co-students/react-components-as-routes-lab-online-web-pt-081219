import React from 'react';
import { movies } from '../data';

const singleMovie = ({
  title,
  time,
  genres
}) => {
  return (
    <div>
      {title}<br></br>
      {time} Minutes
      <ul>
        {genres.map((genre, index) => {
          return <li id={index + 1}>{genre}</li>
        })}
      </ul>
    </div>
  )
}


const Movies = () => {
  return (
    <div>
      <h1>
        Movies Page
      </h1>
      {movies.map(singleMovie)}
    </div>
  );
};

export default Movies;
