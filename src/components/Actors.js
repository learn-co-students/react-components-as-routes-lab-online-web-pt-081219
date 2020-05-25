import React from 'react';
import { actors } from '../data';

const singleActor = ({
  name,
  movies
}) => {
  return (
    <div>
      {name}
      <ul>
        {movies.map((movie, index) => {
          return <li id={index+1}>{movie}</li>
        })}
      </ul>
    </div>
  )
}


const Actors = () => {
  return (
    <div>
      <h1>
        Actors Page
      </h1>
      {actors.map(singleActor)}
    </div>
  );
};

export default Actors;
