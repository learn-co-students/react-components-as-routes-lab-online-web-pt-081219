import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>

      <div>
        Name: {directors[0].name}
       <br></br>Movies: {directors[0].movies.map(x=> <ul>{x}</ul>)}
       
        </div>
        <br></br>

        <div>
        Name: {directors[1].name}
       <br></br>Genres: {directors[1].movies.map(x=> <ul>{x}</ul>)}
       
        </div>
        <br></br>

        <div>
        Name: {directors[2].name}
       <br></br>Genres: {directors[2].movies.map(x=> <ul>{x}</ul>)}
       
        </div>
        <br></br>
    </div>
  );
}

export default Directors
