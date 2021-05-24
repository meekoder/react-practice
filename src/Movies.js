import PropTypes from 'prop-types';
import Movie from './Movie';

function Movies({ movies }) {
  return (
    <div className="movies">
      {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
    </div>
  );
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Movies;
