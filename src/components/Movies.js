import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div key={movie.title}>
          {movie.title}
          <br />
          {movie.time}
          <br />
          {movie.genres}
          <br />
          {movie.metascore}
        </div>
      ))}
    </div>
  );
};

export default Movies;
