import { useState } from 'react';
import movies from './fakeData';
import Movies from './Movies';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(movies);

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (query.length && query.length % 2 === 0) {
      filterMovies();
    }
  };

  const filterMovies = () => {
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    setResults(filtered);
  };

  return (
    <>
      <input type="text" placeholder="Search" value={query} onChange={handleChange} />
      <button type="submit">Submit</button>
      <Movies movies={results} />
    </>
  );
}

export default Search;
