import React from 'react';
import { directors } from '../data';

const singleDirector = ({
  name,
  movies
}) => {
  return (
    <div>
      {name}
      <ul>
      {movies.map((movie, index)=> {
        return <li id={index+1}>{movie}</li>
      })}
      </ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>
        Directors Page
      </h1>
      {directors.map(singleDirector)}
    </div>
  );
}



export default Directors
