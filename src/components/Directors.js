import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d =>
        <div className="director">
          <h3>{d.name}</h3>
          {d.movies.map(m =>
            <li>{m}</li>  
          )}

        </div>
      )}
      
    </div>
  );
}

export default Directors
