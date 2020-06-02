import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        
        <div>
        Title: {movies[0].title}
       <br></br>Genres: {movies[0].genres.map(x=> <ul>{x}</ul>)}
       Time: {movies[0].time}
        </div>
        <br></br>
        <div>
        Title: {movies[1].title}
       <br></br>Genres: {movies[1].genres.map(x=> <ul>{x}</ul>)}
       Time: {movies[1].time}
        </div>
        <br></br>

        <div>
        Title: {movies[2].title}
       <br></br>Genres: {movies[2].genres.map(x=> <ul>{x}</ul>)}
       Time: {movies[2].time}
        </div>
    </div>
  );
};

export default Movies;
