import React from 'react';
import MovieInfo from '../components/MovieInfo';

const MoviePage = () => {
  const movie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    studio: 'Warner Bros',
    poster: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/12/Christopher-Nolan-Batman-Trilogy-Posters.jpg'
  };

  return (
    <div>
      <h1>Favorite Movie</h1>
      <MovieInfo {...movie} />
    </div>
  );
};

export default MoviePage;
