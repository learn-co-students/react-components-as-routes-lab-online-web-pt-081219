import React from "react";
import { actors } from "../data";

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <div key={actor.name}>
          {actor.name}
          <br />
          {actor.movies}
        </div>
      ))}
    </div>
  );
};

export default Actors;
