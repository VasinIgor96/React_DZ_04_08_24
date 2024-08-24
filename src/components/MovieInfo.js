import React from 'react';

const MovieInfo = ({ title, director, year, studio, poster }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p><strong>Director:</strong> {director}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Studio:</strong> {studio}</p>
      <img src={poster} alt={title} style={{ width: '300px', height: 'auto' }} />
    </div>
  );
};

export default MovieInfo;
