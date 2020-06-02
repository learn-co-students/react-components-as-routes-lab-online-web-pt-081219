import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(m =>
          <div className="movie">
            <h3>{m.title}</h3>
            <li>Time: {m.time}</li>
            <li>Genres: {m.genres.join(', ')}</li>
            <li>Metascore: {m.metascore}</li>
          </div>
        )}

    </div>
  );
};

export default Movies;
