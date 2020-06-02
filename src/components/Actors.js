import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      <div className="actor">
      Name: {actors[0].name}
      <br></br>Movies: {actors[0].movies.map(x=> <ul>{x}</ul>)}
    </div>

    <div className="actor">
      Name: {actors[1].name}
      <br></br>Movies: {actors[1].movies.map(x=> <ul>{x}</ul>)}
    </div>

    <div className="actor">
      Name: {actors[2].name}
      <br></br>Movies: {actors[2].movies.map(x=> <ul>{x}</ul>)}
    </div>

    <div className="actor">
      Name: {actors[3].name}
      <br></br>Movies: {actors[3].movies.map(x=> <ul>{x}</ul>)}
    </div>
    </div>
  );
};

export default Actors;
