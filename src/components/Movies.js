import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div className="movies">
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>Name: {movie.title}</h2>
          <h3>Time: {movie.time}</h3>
          <h3>Genres: </h3>
          <ul>{
            movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
