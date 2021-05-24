import PropTypes from 'prop-types';

function Movie({ movie }) {
  return (
    <div className="movie">
      <h3>{movie.title}</h3>
      <p>{movie.director}</p>
      <p>{movie.yearReleased}</p>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
